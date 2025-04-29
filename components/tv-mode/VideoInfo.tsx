'use client';

import { X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface VideoInfoProps {
  video: {
    title: string;
    channel?: {
      name: string;
      avatar?: string;
      verified?: boolean;
    };
    category?: string;
  };
  onClose: () => void;
}

export function VideoInfo({ video, onClose }: VideoInfoProps) {
  console.log('Using channel avatar:', video.channel?.avatar);

  return (
    <div className='absolute top-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-b from-black/80 to-transparent'>
      <div className='flex items-center gap-2 sm:gap-3'>
        <button
          onClick={onClose}
          className='text-white hover:text-white/80'>
          <X className='h-5 w-5 sm:h-6 sm:w-6' />
        </button>

        <div className='flex items-center gap-1 sm:gap-2 overflow-hidden'>
          <span className='text-white font-medium text-sm sm:text-base whitespace-nowrap'>Now Playing: </span>
          <span className='text-white text-sm sm:text-base truncate'>{video.title}</span>
        </div>
      </div>

      {video.channel && (
        <div className='flex items-center gap-2 mt-2'>
          <Avatar className='h-5 w-5 sm:h-6 sm:w-6'>
            <AvatarImage
              src={video.channel.avatar || '/placeholder.svg?height=32&width=32&query=avatar'}
              alt={video.channel.name || 'Channel'}
            />
            <AvatarFallback>{video.channel.name?.[0] || 'C'}</AvatarFallback>
          </Avatar>
          <span className='text-white text-xs sm:text-sm'>{video.channel.name || 'YouTube Channel'}</span>
          {video.channel.verified && (
            <svg
              className='h-3 w-3 sm:h-3.5 sm:w-3.5 text-white'
              viewBox='0 0 24 24'
              fill='currentColor'>
              <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.7 14.5l-3.2-3.2 1.4-1.4 1.8 1.8 5.1-5.1 1.4 1.4-6.5 6.5z'></path>
            </svg>
          )}
        </div>
      )}
    </div>
  );
}
