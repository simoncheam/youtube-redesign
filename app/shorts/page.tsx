'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import Link from 'next/link';
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { shortVideos } from '@/data/shorts';
import { PATHS } from '@/lib/constants';

const categories = [
  'All',
  'Music',
  'Tech',
  'Design',
  'Live',
  'Playlists',
  'Cats',
  'Electronics',
  'Art',
  'Tech News',
  'Lofi beats',
  'UI/UX Redesign',
  'New Creators',
];

export default function ShortsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className='bg-youtube-black min-h-screen'>
      <div className='container mx-auto px-4 py-6'>
        <div className='mb-6'>
          <ScrollArea className='w-full whitespace-nowrap'>
            <div className='flex space-x-2 p-1'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium',
                    activeCategory === category
                      ? 'bg-white text-black'
                      : 'bg-youtube-card text-white hover:bg-youtube-hover'
                  )}>
                  {category}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
          {shortVideos.slice(0, 12).map((video) => (
            <Link
              key={video.id}
              href={`${PATHS.ROUTES.SHORTS}/${video.id}`}
              className='group'>
              <div className='space-y-2'>
                <div className='relative aspect-[9/16] overflow-hidden rounded-xl'>
                  <Image
                    src={video.thumbnail || '/placeholder.svg'}
                    alt={video.title}
                    width={405}
                    height={720}
                    className='object-cover transition-transform group-hover:scale-105'
                  />
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 opacity-0 group-hover:opacity-100'>
                    <MoreVertical className='h-4 w-4 text-white' />
                    <span className='sr-only'>More options</span>
                  </Button>
                </div>
                <div>
                  <h3 className='text-sm font-medium leading-tight group-hover:text-primary'>{video.title}</h3>
                  {video.channel && <div className='text-xs text-muted-foreground'>{video.channel}</div>}
                  <div className='text-xs text-muted-foreground'>
                    {video.views} • {video.timestamp}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}