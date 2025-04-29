'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, MoreVertical, ThumbsUp, ChevronRight } from 'lucide-react';
import { SiYoutubeshorts } from 'react-icons/si';
import { shortVideos } from '@/data/shorts';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PATHS } from '@/lib/constants';

export default function HomeShortsSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className='mb-8 rounded-xl bg-youtube-input border border-youtube-card overflow-hidden'>
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-2'>
          <SiYoutubeshorts
            size={24}
            color='white'
          />
          <h2 className='text-lg md:text-xl font-medium'>Shorts</h2>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='sm'
            className='h-8 text-xs rounded-full flex items-center gap-1'
            onClick={() => setIsVisible(false)}>
            <X className='h-4 w-4' />
            <span className='hidden sm:inline'>Not interested</span>
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='h-8 text-xs rounded-full flex items-center gap-1 bg-youtube-card'>
            <ThumbsUp className='h-4 w-4 mr-1' />
            <span className='hidden sm:inline'>Show me more</span>
          </Button>
        </div>
      </div>

      <div className='relative px-4 pb-4'>
        <ScrollArea className='w-full'>
          <div className='flex space-x-4 pb-4'>
            {shortVideos.map((video) => (
              <div
                key={video.id}
                className='flex-shrink-0 w-[150px] sm:w-[180px] group'>
                <div className='space-y-2'>
                  <div className='relative aspect-[9/16] w-full overflow-hidden rounded-xl'>
                    <Link href={`${PATHS.ROUTES.SHORTS}/${video.id}`}>
                      <Image
                        src={video.thumbnail || '/placeholder.svg'}
                        alt={video.title}
                        width={405}
                        height={720}
                        className='object-cover transition-transform group-hover:scale-105'
                      />
                    </Link>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 opacity-0 group-hover:opacity-100'>
                      <MoreVertical className='h-4 w-4' />
                      <span className='sr-only'>More options</span>
                    </Button>
                  </div>
                  <div>
                    <Link
                      href={`${PATHS.ROUTES.SHORTS}/${video.id}`}
                      className='block'>
                      <h3 className='font-medium text-sm line-clamp-2 group-hover:text-primary'>{video.title}</h3>
                    </Link>
                    <div className='text-xs text-muted-foreground'>{video.channel}</div>
                    <div className='text-xs text-muted-foreground'>{video.views}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-youtube-input from-20% to-transparent w-24 h-full flex items-center justify-end pr-4'>
          <Button
            variant='ghost'
            size='icon'
            className='h-10 w-10 rounded-full bg-youtube-card'>
            <ChevronRight className='h-5 w-5' />
            <span className='sr-only'>Next</span>
          </Button>
        </div>
      </div>
    </div>
  );
}