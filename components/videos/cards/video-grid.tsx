'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { videoGridData } from '@/data/home/videos';
import { PATHS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface VideoGridProps {
  title?: string;
  initialItemCount?: number;
  loadMoreIncrement?: number;
}

const MemoizedVideoItem = React.memo(({ video }: { video: (typeof videoGridData)[0] }) => {
  return (
    <Link
      key={video.id}
      href={`${PATHS.ROUTES.WATCH}/${video?.id}`}
      className='group'>
      <div className='space-y-2'>
        <div className='relative aspect-video overflow-hidden rounded-xl'>
          <Image
            src={video.thumbnail || '/placeholder.svg'}
            alt={video?.title || 'Video Title'}
            width={640}
            height={360}
            className='object-cover transition-transform group-hover:scale-105'
          />
          {video?.metadata?.duration && (
            <div className='absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs rounded'>
              {video?.metadata?.duration}
            </div>
          )}
        </div>
        <div className='flex gap-2'>
          {video.channel && (
            <Avatar className='h-9 w-9 rounded-full flex-shrink-0'>
              <AvatarImage
                src={video.channel.avatar || '/placeholder.svg'}
                alt={video.channel.name || 'Channel'}
              />
              <AvatarFallback>{video.channel.name?.charAt(0) || '?'}</AvatarFallback>
            </Avatar>
          )}
          <div className='flex-1 min-w-0'>
            <h3 className='font-medium leading-tight group-hover:text-primary text-sm line-clamp-2'>{video.title}</h3>
            {video.channel && (
              <div className='text-xs text-muted-foreground mt-1'>
                <div>{video.channel.name}</div>
              </div>
            )}
            <div className='text-xs text-muted-foreground'>
              {video.views || video.timestamp
                ? `${video.views || ''}${video.views && video.timestamp ? ' • ' : ''}${video.timestamp || ''}`
                : null}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});
MemoizedVideoItem.displayName = 'MemoizedVideoItem';

export default function VideoGrid({ title, initialItemCount = 9, loadMoreIncrement = 6 }: VideoGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialItemCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + loadMoreIncrement);
  };

  const visibleVideos = videoGridData.slice(0, visibleCount);
  const hasMoreItems = visibleCount < videoGridData.length;

  return (
    <div className='mb-8'>
      {title && <h2 className='text-lg md:text-xl font-bold mb-4'>{title}</h2>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {visibleVideos.map((video) => (
          <MemoizedVideoItem
            key={video.id}
            video={video}
          />
        ))}
      </div>
      {hasMoreItems && (
        <div className='mt-6 text-center'>
          <Button
            onClick={handleLoadMore}
            variant='outline'>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
