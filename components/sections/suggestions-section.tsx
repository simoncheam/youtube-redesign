'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { suggestedVideos } from '@/data/home/suggested-videos';
import { PATHS } from '@/lib/constants';
import { MoreVertical, ThumbsUp, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SuggestionsSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className='mb-8 rounded-xl bg-youtube-input border border-youtube-card overflow-hidden'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between p-4'>
        <h2 className='text-lg md:text-xl font-medium mb-2 sm:mb-0'>Suggestions based on recent watches</h2>
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

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {suggestedVideos.map((video) => (
          <div
            key={video.id}
            className='group'>
            <div className='space-y-2'>
              <div className='relative aspect-video overflow-hidden rounded-xl'>
                <Link href={`${PATHS.ROUTES.WATCH}/${video.id}`}>
                  <Image
                    src={video.thumbnail || '/placeholder.svg'}
                    alt={video.title || 'Video thumbnail'}
                    width={1280}
                    height={720}
                    className='object-cover transition-transform group-hover:scale-105'
                  />
                  {video.metadata?.duration && (
                    <div className='absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs rounded'>
                      {video.metadata.duration}
                    </div>
                  )}
                </Link>
              </div>
              <div className='flex gap-2'>
                <Link
                  href={`${PATHS.ROUTES.CHANNEL}/${video.channel.id}`}
                  className='flex-shrink-0'>
                  <Avatar className='h-9 w-9 rounded-full'>
                    <AvatarImage
                      src={video.channel.avatar || '/placeholder.svg'}
                      alt={video.channel.name}
                    />
                    <AvatarFallback>{video.channel.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Link>
                <div className='flex-1 min-w-0'>
                  <Link
                    href={`${PATHS.ROUTES.WATCH}/${video.id}`}
                    className='block'>
                    <h3 className='font-medium leading-tight group-hover:text-primary text-sm line-clamp-2'>
                      {video.title}
                    </h3>
                  </Link>
                  <Link
                    href={`${PATHS.ROUTES.CHANNEL}/${video.channel.id}`}
                    className='block'>
                    <div className='flex items-center text-xs text-muted-foreground mt-1'>
                      <span>{video.channel.name}</span>
                      {video.channel.verified && (
                        <svg
                          className='ml-1 h-3.5 w-3.5 text-muted-foreground'
                          viewBox='0 0 24 24'
                          fill='currentColor'>
                          <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.7 14.5l-3.2-3.2 1.4-1.4 1.8 1.8 5.1-5.1 1.4 1.4-6.5 6.5z'></path>
                        </svg>
                      )}
                    </div>
                  </Link>
                  <div className='text-xs text-muted-foreground'>
                    {video.views} • {video.timestamp}
                  </div>
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full self-start flex-shrink-0 opacity-0 group-hover:opacity-100'>
                  <MoreVertical className='h-4 w-4' />
                  <span className='sr-only'>More options</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
