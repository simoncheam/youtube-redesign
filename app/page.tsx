'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MoreVertical } from 'lucide-react';
import CategoryTabs from '@/components/navigation/category-tabs';
import MissedVideosSection from '@/components/sections/missed-videos-section';
import SuggestionsSection from '@/components/sections/suggestions-section';
import HomeShortsSection from '@/components/sections/home-shorts-section';
import VideoGrid from '@/components/videos/cards/video-grid';
import { PATHS } from '@/lib/constants';

// Import data from the centralized location
import { channels } from '@/data/channels';
import { mobileHomeVideos } from '@/data/home/videos';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Only run on client-side
  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   checkMobile();
  //   window.addEventListener('resize', checkMobile);
  //   return () => window.removeEventListener('resize', checkMobile);
  // }, []);

  if (isMobile) {
    return (
      <>
        {/* Channel icons */}
        <ScrollArea className='w-full'>
          <div className='px-4 pt-3 pb-2 flex gap-4'>
            {channels.slice(0, 5).map((channel) => (
              <div
                key={channel.id}
                className='flex flex-col items-center gap-1 min-w-[60px]'>
                <div className='relative'>
                  <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-youtube-red'>
                    <Image
                      src={channel.image || channel.avatar || '/placeholder.svg'}
                      alt={channel.name}
                      width={48}
                      height={48}
                      className='object-cover'
                    />
                  </div>
                  {channel.hasNew && (
                    <div className='absolute bottom-0 right-0 w-2 h-2 bg-youtube-red rounded-full'></div>
                  )}
                </div>
                <span className='text-xs truncate w-full text-center text-white'>{channel.name}</span>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Category tabs */}
        <ScrollArea className='w-full'>
          <div className='flex gap-2 px-4 py-2'>
            <Button
              variant='secondary'
              size='sm'
              className='rounded-full bg-white text-black whitespace-nowrap'>
              <svg
                className='w-4 h-4 mr-1'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4 6H20M4 12H20M4 18H20'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              All
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='rounded-full bg-youtube-card text-white whitespace-nowrap'>
              Subscriptions
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='rounded-full bg-youtube-card text-white whitespace-nowrap'>
              Posts
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='rounded-full bg-youtube-card text-white whitespace-nowrap'>
              New
            </Button>
          </div>
        </ScrollArea>

        {/* Videos */}
        <div className='mt-2 space-y-4 pb-4'>
          {mobileHomeVideos.map((video) => (
            <div
              key={video.id}
              className='space-y-2'>
              <Link
                href={`${PATHS.ROUTES.WATCH}/${video.id}`}
                className='block relative'>
                <div className='aspect-video relative overflow-hidden'>
                  <Image
                    src={video.thumbnail || '/placeholder.svg'}
                    alt={video.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded'>
                    {video.duration || video.metadata?.duration || 'N/A'}
                  </div>
                </div>
              </Link>
              <div className='px-4 flex gap-3'>
                {video.channel && (
                  <Link
                    href={`${PATHS.ROUTES.CHANNEL}/${video.channel.id}`}
                    className='flex-shrink-0'>
                    <Image
                      src={video.channel.avatar || '/placeholder.svg'}
                      alt={video.channel.name}
                      width={36}
                      height={36}
                      className='rounded-full h-9 w-9'
                    />
                  </Link>
                )}
                <div className='flex-1 min-w-0'>
                  <Link
                    href={`${PATHS.ROUTES.WATCH}/${video.id}`}
                    className='block'>
                    <h3 className='font-medium text-sm line-clamp-2 text-white'>{video.title}</h3>
                    <p className='text-xs text-gray-400 mt-1'>
                      {video.channel?.name || 'Unknown Channel'} • {video.views} • {video.timestamp}
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
      </>
    );
  }

  // Desktop view
  return (
    <div className='w-full max-w-[1800px] mx-auto px-4 py-4 md:py-6'>
      <CategoryTabs />
      <MissedVideosSection />
      <VideoGrid />
      <SuggestionsSection />
      <HomeShortsSection />
    </div>
  );
}
