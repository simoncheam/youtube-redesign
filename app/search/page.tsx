'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SearchIcon, X, MoreVertical, Filter } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { videos } from '@/data/videos';
import { missedVideos } from '@/data/home/missed-videos';

export default function SearchPage() {
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(queryParam || 'how to make gingerbread cookies');

  // Detect mobile on client side
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter videos based on search query
  const searchResults = [...videos, ...missedVideos]
    .slice(0, 10) // Limiting results for performance
    .map((video) => ({
      id: video.id,
      title: video.title,
      thumbnail: video.thumbnail,
      channel: video.channel.name,
      channelImage: video.channel.avatar,
      views: video.views?.replace('views', '') || '100K',
      time: video.timestamp,
      duration: video.metadata?.duration || '12:07',
    }));

  // Mobile view
  if (isMobile) {
    return (
      <>
        <div className='sticky top-0 z-50 bg-youtube-black border-b border-youtube-card p-2 flex items-center gap-2'>
          <Link
            href='/'
            className='flex-shrink-0'>
            <Button
              variant='ghost'
              size='icon'
              className='h-10 w-10 text-white'>
              <svg
                className='h-5 w-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M19 12H5M5 12L12 19M5 12L12 5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Button>
          </Link>
          <div className='flex-1 relative'>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full h-10 pl-10 pr-10 rounded-full border border-youtube-card bg-youtube-card text-white text-sm'
            />
            <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
            {searchQuery && (
              <Button
                variant='ghost'
                size='icon'
                className='absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-400'
                onClick={() => setSearchQuery('')}>
                <X className='h-5 w-5' />
              </Button>
            )}
          </div>
        </div>

        <div className='p-2 bg-youtube-black text-white'>
          <Tabs defaultValue='all'>
            <div className='flex items-center gap-2 overflow-x-auto no-scrollbar'>
              <Button
                variant='outline'
                size='sm'
                className='rounded-full flex-shrink-0 border-youtube-card text-white'>
                <Filter className='h-4 w-4 mr-1' />
              </Button>
              <TabsList className='bg-transparent p-0 h-auto'>
                <TabsTrigger
                  value='all'
                  className='rounded-full px-4 py-1 h-8 data-[state=active]:bg-youtube-card text-white'>
                  All
                </TabsTrigger>
                <TabsTrigger
                  value='videos'
                  className='rounded-full px-4 py-1 h-8 data-[state=active]:bg-youtube-card text-white'>
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value='shorts'
                  className='rounded-full px-4 py-1 h-8 data-[state=active]:bg-youtube-card text-white'>
                  Shorts
                </TabsTrigger>
                <TabsTrigger
                  value='watch'
                  className='rounded-full px-4 py-1 h-8 data-[state=active]:bg-youtube-card text-white'>
                  Watch
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <div className='mt-4 space-y-4'>
            {searchResults.map((result) => (
              <div
                key={result.id}
                className='space-y-2'>
                <Link
                  href={`/watch/${result.id}`}
                  className='block'>
                  <div className='aspect-video relative rounded-lg overflow-hidden'>
                    <Image
                      src={result.thumbnail || '/placeholder.svg'}
                      alt={result.title}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded'>
                      {result.duration}
                    </div>
                  </div>
                </Link>
                <div className='flex gap-3'>
                  <Link
                    href={`/channel/${result.channel.toLowerCase().replace(/\s+/g, '-')}`}
                    className='flex-shrink-0'>
                    <Image
                      src={result.channelImage || '/placeholder.svg'}
                      alt={result.channel}
                      width={36}
                      height={36}
                      className='rounded-full'
                    />
                  </Link>
                  <div className='flex-1 min-w-0'>
                    <Link
                      href={`/watch/${result.id}`}
                      className='block'>
                      <h3 className='font-medium text-sm line-clamp-2'>{result.title}</h3>
                      <p className='text-xs text-gray-400 mt-1'>
                        {result.channel} • {result.views} • {result.time}
                      </p>
                    </Link>
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8 flex-shrink-0 text-white'>
                    <MoreVertical className='h-5 w-5' />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Desktop view
  return (
    <div className="container mx-auto px-4 py-4 md:py-6">
      <h1 className="text-xl font-medium mb-6">Search Results for "{searchQuery}"</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {searchResults.map((result) => (
          <div key={result.id} className="flex gap-4 group">
            <Link href={`/watch/${result.id}`} className="relative w-64 flex-shrink-0">
              <div className='aspect-video relative rounded-lg overflow-hidden'>
                <Image
                  src={result.thumbnail || '/placeholder.svg'}
                  alt={result.title}
                  fill
                  className='object-cover transition-transform group-hover:scale-105'
                />
                <div className='absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs rounded'>
                  {result.duration}
                </div>
              </div>
            </Link>
            
            <div className="flex-1">
              <Link href={`/watch/${result.id}`}>
                <h2 className="font-medium text-lg mb-2 group-hover:text-blue-500">{result.title}</h2>
              </Link>
              <p className="text-sm text-gray-400">
                {result.views} views • {result.time}
              </p>
              <div className="flex items-center mt-2">
                <Link href={`/channel/${result.channel.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex items-center">
                    <Image
                      src={result.channelImage || '/placeholder.svg'}
                      alt={result.channel}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-300">{result.channel}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}