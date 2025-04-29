'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PATHS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { BadgeCheck, Flame, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

interface TrendingSectionProps {
  videos: Video[];
  className?: string;
}

export default function TrendingSection({ videos, className }: TrendingSectionProps) {
  const [activeTab, setActiveTab] = useState('Now');
  const tabs = ['Now', 'Music', 'Gaming', 'Movies', 'Shorts'];

  return (
    <div className={cn('mb-10', className)}>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-youtube-red'>
            <Flame className='h-5 w-5 text-white' />
          </div>
          <h2 className='text-2xl font-bold'>Trending</h2>
        </div>
        <Link
          href='/trending'
          className='text-sm text-primary'>
          View all
        </Link>
      </div>

      <div className='flex space-x-2 mb-4 overflow-x-auto pb-2'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap',
              activeTab === tab ? 'bg-white text-black' : 'bg-youtube-card text-white hover:bg-youtube-hover'
            )}>
            {tab}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {videos.slice(0, 8).map((video) => (
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
                      {video.channel.verified && <BadgeCheck className='ml-1 h-3.5 w-3.5 text-muted-foreground' />}
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
