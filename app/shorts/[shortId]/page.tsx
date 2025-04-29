'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, MoreVertical } from 'lucide-react';
import { shortVideos, shortDetails } from '@/data/shorts';
import { cn } from '@/lib/utils';
import { PATHS } from '@/lib/constants';

// TypeScript interfaces for type safety
interface ShortVideo {
  id: string;
  title: string;
  thumbnail?: string;
  channel: string;
  channelId: string;
  channelAvatar?: string;
  subscribers?: string;
  views?: string;
  timestamp?: string;
}

interface ShortDetail {
  fullVideo: string;
  likes: string;
  dislikes: string;
  comments: string;
  shares: string;
}

type ShortDetailsMap = {
  [key: string]: ShortDetail;
};

export default function ShortPage() {
  const router = useRouter();
  const { shortId } = useParams() as { shortId: string };
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeShortIndex, setActiveShortIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Find the index of the current short
  useEffect(() => {
    const index = shortVideos.findIndex((s) => s.id === shortId);
    if (index !== -1) {
      setActiveShortIndex(index);
      // Smooth scroll to top when changing shorts via URL
      scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [shortId]);

  // Handle scroll to load next short - optimized with throttling
  useEffect(() => {
    let isThrottled = false;
    const throttleDuration = 300; // ms

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;

        if (!scrollContainerRef.current) return;

        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        const scrollPosition = scrollTop + clientHeight;

        // If we're near the bottom of the current short, load the next one
        if (scrollPosition >= scrollHeight - 100) {
          const nextIndex = (activeShortIndex + 1) % shortVideos.length;
          router.push(`${PATHS.ROUTES.SHORTS}/${shortVideos[nextIndex].id}`, { scroll: false });
        }
      }, throttleDuration);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeShortIndex, router]);

  // Get current short and details
  const currentShort = shortVideos[activeShortIndex] as ShortVideo | undefined;
  const currentDetails = currentShort ? (shortDetails as ShortDetailsMap)[currentShort.id] : undefined;

  if (!currentShort || !currentDetails) {
    return <div className='flex h-screen items-center justify-center bg-youtube-black text-white'>Loading...</div>;
  }

  return (
    <div
      ref={scrollContainerRef}
      className='h-screen overflow-y-auto bg-youtube-black scrollbar-hide'>
      {/* Current Short */}
      <div className='relative h-screen flex justify-center'>
        <div className='relative w-[405px] max-w-full h-full'>
          <Image
            src={currentDetails.fullVideo || '/placeholder.svg'}
            alt={currentShort.title}
            fill
            className='object-contain'
            priority={true}
          />

          {/* Engagement buttons */}
          <div className='absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center'>
              <Button
                variant='ghost'
                size='icon'
                className='h-10 w-10 rounded-full bg-youtube-card hover:bg-youtube-hover'>
                <ThumbsUp className='h-5 w-5 text-white' />
              </Button>
              <span className='mt-1 text-xs text-white font-medium'>{currentDetails.likes}</span>
            </div>

            <div className='flex flex-col items-center'>
              <Button
                variant='ghost'
                size='icon'
                className='h-10 w-10 rounded-full bg-youtube-card hover:bg-youtube-hover'>
                <ThumbsDown className='h-5 w-5 text-white' />
              </Button>
              <span className='mt-1 text-xs text-white font-medium'>{currentDetails.dislikes}</span>
            </div>

            <div className='flex flex-col items-center'>
              <Button
                variant='ghost'
                size='icon'
                className='h-10 w-10 rounded-full bg-youtube-card hover:bg-youtube-hover'>
                <MessageSquare className='h-5 w-5 text-white' />
              </Button>
              <span className='mt-1 text-xs text-white font-medium'>{currentDetails.comments}</span>
            </div>

            <div className='flex flex-col items-center'>
              <Button
                variant='ghost'
                size='icon'
                className='h-10 w-10 rounded-full bg-youtube-card hover:bg-youtube-hover'>
                <Share2 className='h-5 w-5 text-white' />
              </Button>
              <span className='mt-1 text-xs text-white font-medium'>{currentDetails.shares}</span>
            </div>

            <Button
              variant='ghost'
              size='icon'
              className='h-10 w-10 rounded-full bg-youtube-card hover:bg-youtube-hover'>
              <MoreVertical className='h-5 w-5 text-white' />
            </Button>
          </div>

          {/* Channel info and title */}
          <div className='absolute bottom-4 left-0 right-0 px-4 z-10'>
            <div className='flex items-center gap-3'>
              <Avatar className='h-8 w-8 border border-white/20 flex-shrink-0'>
                <AvatarImage
                  src={currentShort.channelAvatar || '/placeholder.svg'}
                  alt={currentShort.channel}
                />
                <AvatarFallback>{currentShort.channel?.[0] || 'U'}</AvatarFallback>
              </Avatar>
              <div className='flex-1'>
                <div className='font-medium text-white truncate'>{currentShort.channel}</div>
              </div>
              <Button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={cn(
                  'text-white',
                  isSubscribed ? 'bg-youtube-card hover:bg-youtube-hover' : 'bg-youtube-red hover:bg-red-700'
                )}
                size='sm'>
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </Button>
            </div>
            <h1 className='mt-3 text-sm font-medium text-white line-clamp-2'>{currentShort.title}</h1>
          </div>

          {/* Progress bar */}
          <div className='absolute bottom-0 left-0 right-0 z-10'>
            <div className='h-1 w-full bg-white/20'>
              <div className='h-full w-1/3 bg-white'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional shorts to scroll through */}
      {shortVideos
        .filter((_, index) => index !== activeShortIndex)
        .slice(0, 5) // Show next 5 shorts
        .map((video, index) => {
          const details = shortDetails[video.id as keyof typeof shortDetails];
          return (
            <div
              key={video.id}
              className='relative h-screen flex justify-center'>
              <div className='relative w-[405px] max-w-full h-full'>
                <Image
                  src={details.fullVideo || '/placeholder.svg'}
                  alt={video.title}
                  fill
                  className='object-contain'
                  loading='lazy'
                />

                {/* Channel info and title */}
                <div className='absolute bottom-4 left-0 right-0 px-4 z-10'>
                  <div className='flex items-center gap-3'>
                    <Avatar className='h-8 w-8 border border-white/20 flex-shrink-0'>
                      <AvatarImage
                        src={video.channelAvatar || '/placeholder.svg'}
                        alt={video.channel}
                      />
                      <AvatarFallback>{video.channel?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                    <div className='flex-1'>
                      <div className='font-medium text-white truncate'>{video.channel}</div>
                    </div>
                    <Button
                      className='bg-youtube-red hover:bg-red-700 text-white'
                      size='sm'>
                      Subscribe
                    </Button>
                  </div>
                  <h1 className='mt-3 text-sm font-medium text-white line-clamp-2'>{video.title}</h1>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
