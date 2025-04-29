'use client';

import type React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PATHS } from '@/lib/constants';

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
  channel: {
    id: string;
    name: string;
    avatar: string;
    verified?: boolean;
  };
  views?: string;
  timestamp?: string;
  metadata?: {
    duration?: string;
  };
}

interface CategorySectionProps {
  title: string;
  icon?: React.ReactNode;
  videos: Video[];
  activeTab?: string;
  tabs?: string[];
  onTabChange?: (tab: string) => void;
  iconBackground?: string;
  className?: string;
}

export default function CategorySection({
  title,
  icon,
  videos,
  activeTab,
  tabs,
  onTabChange,
  iconBackground = 'bg-youtube-red',
  className,
}: CategorySectionProps) {
  // Determine if we should show channel information based on section type
  const showChannelInfo = title !== 'Music' && title !== 'Gaming';

  return (
    <div className={cn('mb-10', className)}>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          {icon && (
            <div className={cn('flex h-10 w-10 items-center justify-center rounded-full', iconBackground)}>{icon}</div>
          )}
          <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
        <Link
          href={`/${title.toLowerCase()}`}
          className='text-sm text-youtube-focus'>
          View all
        </Link>
      </div>

      {tabs && tabs.length > 0 && (
        <div className='flex space-x-2 mb-4 overflow-x-auto pb-2'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange?.(tab)}
              className={cn(
                'inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap',
                activeTab === tab ? 'bg-white text-black' : 'bg-youtube-card text-white hover:bg-youtube-hover'
              )}>
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {videos.map((video) => (
          <div
            key={video.id}
            className='group'>
            <div className='space-y-2'>
              <div className='relative aspect-video overflow-hidden rounded-xl'>
                <Link href={`${PATHS.ROUTES.WATCH}/${video.id}`}>
                  <Image
                    src={video.thumbnail || '/placeholder.svg'}
                    alt={video.title}
                    width={640}
                    height={360}
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
                {/* Only show avatar for sections that aren't Music or Gaming */}
                {showChannelInfo && (
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
                )}
                <div className='flex-1 min-w-0'>
                  <Link
                    href={`${PATHS.ROUTES.WATCH}/${video.id}`}
                    className='block'>
                    <h3 className='font-medium leading-tight group-hover:text-primary text-sm line-clamp-2'>
                      {video.title}
                    </h3>
                  </Link>
                  {/* Only show channel name for sections that aren't Music or Gaming */}
                  {showChannelInfo && (
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
                  )}
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
