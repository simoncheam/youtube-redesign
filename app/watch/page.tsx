'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import VideoPlayer from '@/components/videos/player/video-player';
import VideoInfo from '@/components/videos/video-info';
import RelatedVideos from '@/components/videos/related-videos';
import Comments from '@/components/videos/comments';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { allVideos as videos } from '@/data/videos';
import { missedVideos } from '@/data/home/missed-videos';
import { VideoData } from '@/data/types';
import {
  ChevronDown,
  Play,
  SkipBack,
  SkipForward,
  Maximize2,
  Cast,
  Settings,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share2,
  MoreVertical,
} from 'lucide-react';

// Static comments data
const comments = [
  {
    id: '1',
    user: '@YouTube Enjoyer',
    avatar: '/users/vibrant-street-market.png',
    content: 'woah I like this redesign',
    time: '2 months ago',
    likes: '10K',
    dislikes: '12',
    replies: '2',
  },
  {
    id: '2',
    user: '@Designer123',
    avatar: '/users/vibrant-street-market.png',
    content: 'The UI looks so clean and intuitive. Great job!',
    time: '1 month ago',
    likes: '5K',
    dislikes: '3',
    replies: '6',
  },
  {
    id: '3',
    user: '@TechFan',
    avatar: '/users/vibrant-street-market.png',
    content: 'This is exactly what YouTube needs right now',
    time: '3 weeks ago',
    likes: '2K',
    dislikes: '5',
    replies: '1',
  },
];

export default function WatchPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('comments');
  const [showComments, setShowComments] = useState(false);

  // Get video ID from URL or params
  const searchParams = useSearchParams();
  const params = useParams();

  // Support both URL formats: /watch?v=video-1 and /watch/video-1
  const queryVideoId = searchParams.get('v');
  const paramVideoId = typeof params.videoId === 'string' ? params.videoId : undefined;
  const videoId = queryVideoId || paramVideoId || 'video-1';

  // Combine videos from both sources
  const allVideos = useMemo(() => [...videos, ...missedVideos], []);

  // Find current video by ID
  const video = useMemo(() => {
    return allVideos.find((v: VideoData) => v.id === videoId) || allVideos[0];
  }, [allVideos, videoId]);

  // Get related videos (exclude current video)
  const relatedVideos = useMemo(() => {
    return allVideos.filter((v: VideoData) => v.id !== video.id).slice(0, 5); // Limit to 5 related videos
  }, [allVideos, video.id]);

  // For mobile view
  const videoLikes = video.likes || '20K';
  const videoDislikes = video.dislikes || '100';

  // Detect mobile on client side
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile view
  if (isMobile) {
    return (
      <>
        {/* Video Player */}
        <div className='relative'>
          <div className='w-full aspect-video bg-black flex items-center justify-center'>
            <div className='absolute top-4 left-4 z-10'>
              <Button
                variant='ghost'
                size='icon'
                className='text-white'>
                <ChevronDown className='h-6 w-6' />
              </Button>
            </div>
            <div className='absolute top-4 right-4 z-10 flex gap-2'>
              <Button
                variant='ghost'
                size='icon'
                className='text-white'>
                <Cast className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-white'>
                <Settings className='h-5 w-5' />
              </Button>
            </div>
            <div className='flex items-center gap-8'>
              <Button
                variant='ghost'
                size='icon'
                className='text-white h-12 w-12'>
                <SkipBack className='h-8 w-8' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-white h-16 w-16'>
                <Play className='h-12 w-12' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-white h-12 w-12'>
                <SkipForward className='h-8 w-8' />
              </Button>
            </div>
            <div className='absolute bottom-8 left-4 right-4 text-white text-sm'>
              <div className='flex justify-between mb-1'>
                <span>10:32</span>
                <span>/ {video.metadata?.duration || '20:00'}</span>
              </div>
              <div className='h-1 bg-white/30 rounded-full overflow-hidden'>
                <div className='h-full bg-white w-1/2 rounded-full'></div>
              </div>
            </div>
            <div className='absolute bottom-4 right-4'>
              <Button
                variant='ghost'
                size='icon'
                className='text-white'>
                <Maximize2 className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>

        {/* Video info */}
        <div className='bg-youtube-black flex-1 text-white'>
          <div className='p-4 border-b border-youtube-card'>
            <div className='flex items-start justify-between'>
              <h1 className='text-lg font-semibold'>{video.title}</h1>
              <Button
                variant='ghost'
                size='sm'
                className='mt-1 text-white'>
                <ChevronDown className='h-5 w-5' />
              </Button>
            </div>
            <p className='text-sm text-gray-400 mt-1'>
              <span className='flex items-center gap-2'>
                <span>{video.views}</span>
                <span>•</span>
                <span>{video.timestamp}</span>
              </span>
            </p>

            <div className='flex items-center gap-3 mt-4'>
              <Link
                href={`/channel/${video.channel.id}`}
                className='flex items-center gap-3'>
                <Image
                  src={video.channel.avatar || '/placeholder.svg'}
                  alt={video.channel.name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div>
                  <h3 className='font-medium text-sm'>{video.channel.name}</h3>
                  <p className='text-xs text-gray-400'>{video.channel.subscribers} subscribers</p>
                </div>
              </Link>
              <Button className='ml-auto rounded-full bg-youtube-red hover:bg-red-700 text-white'>Subscribe</Button>
            </div>

            <div className='flex gap-2 mt-4 overflow-x-auto no-scrollbar'>
              <Button
                variant='ghost'
                size='sm'
                className='rounded-full flex gap-1 text-white bg-youtube-card'>
                <ThumbsUp className='h-4 w-4' />
                <span>{videoLikes}</span>
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className='rounded-full flex gap-1 text-white bg-youtube-card'>
                <ThumbsDown className='h-4 w-4' />
                <span>{videoDislikes}</span>
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className='rounded-full flex gap-1 text-white bg-youtube-card'
                onClick={() => setShowComments(true)}>
                <MessageSquare className='h-4 w-4' />
                <span>1.4K</span>
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className='rounded-full text-white bg-youtube-card'>
                <Share2 className='h-4 w-4 mr-1' />
                Share
              </Button>
            </div>
          </div>

          {showComments ? (
            <div className='p-4'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-medium'>Comments (1.4K)</h2>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setShowComments(false)}
                  className='text-white'>
                  <ChevronDown className='h-5 w-5' />
                </Button>
              </div>

              <Tabs defaultValue='top'>
                <TabsList className='grid grid-cols-4 mb-4 bg-youtube-card'>
                  <TabsTrigger
                    value='top'
                    className='rounded-full data-[state=active]:bg-white data-[state=active]:text-black'>
                    Top
                  </TabsTrigger>
                  <TabsTrigger
                    value='liked'
                    className='rounded-full data-[state=active]:bg-white data-[state=active]:text-black'>
                    Most Liked
                  </TabsTrigger>
                  <TabsTrigger
                    value='newest'
                    className='rounded-full data-[state=active]:bg-white data-[state=active]:text-black'>
                    Newest
                  </TabsTrigger>
                  <TabsTrigger
                    value='timed'
                    className='rounded-full data-[state=active]:bg-white data-[state=active]:text-black'>
                    Timed
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className='space-y-4'>
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className='flex gap-3'>
                    <Image
                      src={comment.avatar || '/placeholder.svg'}
                      alt={comment.user}
                      width={36}
                      height={36}
                      className='rounded-full flex-shrink-0'
                    />
                    <div className='flex-1'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium'>
                          {comment.user} <span className='text-gray-400 font-normal'>{comment.time}</span>
                        </p>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 text-white'>
                          <MoreVertical className='h-4 w-4' />
                        </Button>
                      </div>
                      <p className='text-sm mt-1'>{comment.content}</p>
                      <div className='flex items-center gap-3 mt-2'>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='h-8 px-2 text-white'>
                          <ThumbsUp className='h-4 w-4 mr-1' />
                          {comment.likes}
                        </Button>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='h-8 px-2 text-white'>
                          <ThumbsDown className='h-4 w-4 mr-1' />
                          {comment.dislikes}
                        </Button>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='h-8 px-2 text-white'>
                          <MessageSquare className='h-4 w-4 mr-1' />
                          {comment.replies}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className='p-4'>
              <h2 className='font-medium mb-4'>Up Next:</h2>
              <div className='space-y-4'>
                {relatedVideos.map((video) => (
                  <div
                    key={video.id}
                    className='flex gap-3'>
                    <Link
                      href={`/watch/${video.id}`}
                      className='flex-shrink-0 relative w-40'>
                      <div className='aspect-video relative rounded-lg overflow-hidden'>
                        <Image
                          src={video.thumbnail || '/placeholder.svg'}
                          alt={video.title}
                          fill
                          className='object-cover'
                        />
                        <div className='absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded'>
                          {video.metadata?.duration || '00:00'}
                        </div>
                      </div>
                    </Link>
                    <div className='flex-1 min-w-0'>
                      <Link
                        href={`/watch/${video.id}`}
                        className='block'>
                        <h3 className='font-medium text-sm line-clamp-2'>{video.title}</h3>
                        <p className='text-xs text-gray-400 mt-1'>
                          {video.channel.name} • {video.views} • {video.timestamp}
                        </p>
                      </Link>
                    </div>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='h-8 w-8 flex-shrink-0 text-white'>
                      <MoreVertical className='h-5 w-5' />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  // Desktop view
  return (
    <div className='container mx-auto px-4 py-4 md:py-6'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6'>
        {/* Main content - video and info */}
        <div className='lg:col-span-2'>
          <VideoPlayer video={video} />
          <VideoInfo video={video} />

          {/* Tabs for comments/description */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full mt-6'>
            <TabsList className='w-full'>
              <TabsTrigger
                value='comments'
                className='flex-1'>
                Comments
              </TabsTrigger>
              <TabsTrigger
                value='description'
                className='flex-1'>
                Description
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value='comments'
              className='mt-4'>
              <Comments videoId={videoId} />
            </TabsContent>
            <TabsContent
              value='description'
              className='mt-4'>
              <div className='bg-youtube-card p-4 rounded-lg'>
                <p className='text-sm text-muted-foreground mb-2'>
                  {video.views} views • {video.timestamp}
                </p>
                <p className='text-sm'>{video.description || 'No description available for this video.'}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related videos - order changes based on screen size */}
        <div className='space-y-4 order-first lg:order-last'>
          <h2 className='font-medium text-lg'>Related Videos</h2>
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
}
