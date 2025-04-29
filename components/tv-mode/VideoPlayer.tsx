'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  video: {
    id: string;
    title: string;
    thumbnail?: string;
  };
  isPlaying: boolean;
  onPlay: () => void;
}

export function VideoPlayer({ video, isPlaying, onPlay }: VideoPlayerProps) {
  return (
    <div className='relative flex-1 flex items-center justify-center overflow-hidden'>
      {/* Video thumbnail/placeholder */}
      <Image
        src={video.thumbnail || '/placeholder.svg?height=720&width=1280&query=youtube+redesign'}
        alt={video.title}
        fill
        className='object-contain'
        priority
      />

      {/* Play button overlay (only when paused) */}
      {!isPlaying && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <button
            onClick={onPlay}
            className='h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm'>
            <Play className='h-8 w-8 sm:h-10 sm:w-10 text-white' />
          </button>
        </div>
      )}
    </div>
  );
}
