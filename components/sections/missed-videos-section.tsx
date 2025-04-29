'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { X, MoreVertical, CheckCircle } from 'lucide-react';
import { missedVideos } from '@/data/home/missed-videos';
import { PATHS } from '@/lib/constants';

export default function MissedVideosSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const videosToShow = missedVideos.slice(0, 4);

  return (
    <div className='mb-8 bg-muted/30 dark:bg-muted/20 p-6 rounded-xl'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg md:text-xl font-medium'>In Case You Missed</h2>
        <Button
          variant='ghost'
          size='icon'
          className='h-8 w-8 rounded-full'
          onClick={() => setIsVisible(false)}>
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </Button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {videosToShow.map((video) => (
          <div
            key={video.id}
            className='group'>
            <div className='space-y-2'>
              <div className='relative aspect-video overflow-hidden rounded-xl'>
                <Link href={`${PATHS.ROUTES.WATCH}/${video.id}`}>
                  <Image
                    src={video.thumbnail || '/placeholder.svg'}
                    alt={video.title || 'Video Thumbnail'}
                    width={1280}
                    height={720}
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    className='object-cover w-full h-full transition-transform group-hover:scale-105'
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
                      {video.channel.verified && <CheckCircle className='ml-1 h-3.5 w-3.5 text-muted-foreground' />}
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
