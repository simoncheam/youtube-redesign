'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Grid, List, MoreVertical, Filter, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function HistoryPage() {
  // States
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('videos');
  const [activeSort, setActiveSort] = useState('newest');

  // Default placeholder for thumbnails
  const defaultThumbnail = '/placeholder.svg';

  // Mock history data grouped by date
  const historyData = [
    {
      date: 'Today - 15 Nov 2024',
      videos: [
        {
          id: 'honest-trailers-shrek',
          title: 'Honest Trailers - Shrek',
          thumbnail: '/images/history/honest-trailers-shrek.png',
          duration: '12:07',
          channel: 'Screen Junkies',
          channelAvatar: '/channels/screen-junkies-avatar.png',
          verified: true,
          views: '5.3M views',
          timestamp: '7 years ago',
        },
        {
          id: 'horse-kicks-tree',
          title: 'Horse kicks tree, farts on dogs then runs away',
          thumbnail: '/images/history/horse-kicks-tree.png',
          duration: '12:07',
          channel: 'Yukon',
          channelAvatar: '/channels/yukon-avatar.png',
          verified: false,
          views: '54M views',
          timestamp: '3 years ago',
        },
      ],
    },
    {
      date: 'Yesterday - 14 Nov 2024',
      videos: [
        {
          id: 'google-year-in-search',
          title: 'Google — Year in Search 2024',
          thumbnail: '/images/history/google-year-in-search.png',
          duration: '12:07',
          channel: 'Google',
          channelAvatar: '/channels/google-avatar.png',
          verified: true,
          views: '5.2M views',
          timestamp: '1 day ago',
        },
      ],
    },
  ];

  return (
    <div className='container mx-auto px-4 py-4 md:py-6 overflow-x-hidden'>
      {/* Header Section */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6'>
        <h1 className='text-xl md:text-2xl font-bold'>History</h1>
        <div className='flex items-center sm:hidden gap-2'>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full'>
            <Search className='h-5 w-5' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full'>
            <Filter className='h-5 w-5' />
          </Button>
        </div>
      </div>

      {/* Filter/Control Bar Section */}
      <div className='flex items-center gap-2 mb-4 pb-1 hide-x-scroll'>
        {/* Filter buttons */}
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('videos')}
          className={cn(
            'rounded-lg text-xs py-1 px-2 whitespace-nowrap bg-transparent border-none hover:bg-zinc-700',
            activeTab === 'videos' ? 'bg-white text-black hover:bg-white hover:text-black' : 'bg-zinc-800 text-white'
          )}>
          Videos
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('posts')}
          className={cn(
            'rounded-lg text-xs py-1 px-2 whitespace-nowrap bg-transparent border-none hover:bg-zinc-700',
            activeTab === 'posts' ? 'bg-white text-black hover:bg-white hover:text-black' : 'bg-zinc-800 text-white'
          )}>
          Posts
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('live')}
          className={cn(
            'rounded-lg text-xs py-1 px-2 whitespace-nowrap bg-transparent border-none hover:bg-zinc-700',
            activeTab === 'live' ? 'bg-white text-black hover:bg-white hover:text-black' : 'bg-zinc-800 text-white'
          )}>
          Live
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('shorts')}
          className={cn(
            'rounded-lg text-xs py-1 px-2 whitespace-nowrap bg-transparent border-none hover:bg-zinc-700',
            activeTab === 'shorts' ? 'bg-white text-black hover:bg-white hover:text-black' : 'bg-zinc-800 text-white'
          )}>
          Shorts
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('comments')}
          className={cn(
            'rounded-lg text-xs py-1 px-2 whitespace-nowrap bg-transparent border-none hover:bg-zinc-700',
            activeTab === 'comments' ? 'bg-white text-black hover:bg-white hover:text-black' : 'bg-zinc-800 text-white'
          )}>
          Comments
        </Button>

        {/* Sort options */}
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveSort('newest')}
          className={cn(
            'rounded-lg text-xs py-1 px-2 whitespace-nowrap bg-transparent border-none hover:bg-zinc-700 ml-2',
            activeSort === 'newest' ? 'bg-white text-black hover:bg-white hover:text-black' : 'bg-zinc-800 text-white'
          )}>
          Newest
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveSort('oldest')}
          className={cn(
            'rounded-lg text-xs py-1 px-2 whitespace-nowrap bg-transparent border-none hover:bg-zinc-700',
            activeSort === 'oldest' ? 'bg-white text-black hover:bg-white hover:text-black' : 'bg-zinc-800 text-white'
          )}>
          Oldest
        </Button>

        {/* Date range button */}
        <Button
          variant='outline'
          size='sm'
          className='flex items-center gap-1 text-xs py-1 px-2 ml-2 bg-zinc-800 text-white border-none hover:bg-zinc-700'>
          <Calendar className='h-3 w-3' />
          <span>Date range</span>
        </Button>

        {/* Grid/List view toggle */}
        <div className='flex items-center border border-youtube-border rounded-md overflow-hidden ml-auto'>
          <Button
            variant='ghost'
            size='icon'
            className={cn('rounded-none h-7 w-7', viewMode === 'grid' ? 'bg-youtube-hover' : 'bg-transparent')}
            onClick={() => setViewMode('grid')}>
            <Grid className='h-3.5 w-3.5' />
            <span className='sr-only'>Grid view</span>
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className={cn('rounded-none h-7 w-7', viewMode === 'list' ? 'bg-youtube-hover' : 'bg-transparent')}
            onClick={() => setViewMode('list')}>
            <List className='h-3.5 w-3.5' />
            <span className='sr-only'>List view</span>
          </Button>
        </div>

        {/* Search history - only on desktop */}
        <div className='hidden lg:block relative ml-2 w-48'>
          <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground' />
          <Input
            placeholder='Search history'
            className='pl-7 py-1 h-7 text-xs bg-youtube-card border-youtube-border'
          />
        </div>
      </div>

      {/* Content Section */}
      <div className='w-full'>
        <div className='space-y-6 md:space-y-8'>
          {historyData.map((group) => (
            <div
              key={group.date}
              className='space-y-3 md:space-y-4'>
              <h2 className='text-sm font-medium text-muted-foreground'>{group.date}</h2>

              {viewMode === 'grid' ? (
                // Grid view - Responsive columns
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {group.videos.map((video) => (
                    <div
                      key={video.id}
                      className='group'>
                      <div className='space-y-2'>
                        <div className='relative aspect-video overflow-hidden rounded-xl'>
                          <Link href={`/watch/${video.id}`}>
                            <Image
                              src={video.thumbnail || defaultThumbnail}
                              alt={video.title}
                              fill
                              className='object-cover transition-transform group-hover:scale-105'
                            />
                            <div className='absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs rounded'>
                              {video.duration}
                            </div>
                          </Link>
                        </div>
                        <div className='flex gap-2'>
                          <Link
                            href={`/channel/${video.channel.toLowerCase()}`}
                            className='flex-shrink-0'>
                            <Avatar className='h-9 w-9 rounded-full'>
                              <AvatarImage
                                src={video.channelAvatar || defaultThumbnail}
                                alt={video.channel}
                              />
                              <AvatarFallback>{video.channel[0]}</AvatarFallback>
                            </Avatar>
                          </Link>
                          <div className='flex-1 min-w-0'>
                            <Link
                              href={`/watch/${video.id}`}
                              className='block'>
                              <h3 className='font-medium leading-tight group-hover:text-primary text-sm line-clamp-2'>
                                {video.title}
                              </h3>
                            </Link>
                            <Link
                              href={`/channel/${video.channel.toLowerCase()}`}
                              className='block'>
                              <div className='flex items-center text-xs text-muted-foreground mt-1'>
                                <span>{video.channel}</span>
                                {video.verified && (
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
              ) : (
                // List view - Adaptive for mobile/desktop
                <div className='space-y-4'>
                  {group.videos.map((video) => (
                    <div
                      key={video.id}
                      className='group flex gap-3 md:gap-4'>
                      <div className='relative aspect-video w-32 sm:w-40 md:w-60 flex-shrink-0 overflow-hidden rounded-xl'>
                        <Link href={`/watch/${video.id}`}>
                          <Image
                            src={video.thumbnail || defaultThumbnail}
                            alt={video.title}
                            fill
                            className='object-cover transition-transform group-hover:scale-105'
                          />
                          <div className='absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs rounded'>
                            {video.duration}
                          </div>
                        </Link>
                      </div>
                      <div className='flex flex-1 min-w-0'>
                        <div className='flex-1'>
                          <Link
                            href={`/watch/${video.id}`}
                            className='block'>
                            <h3 className='font-medium leading-tight group-hover:text-primary text-sm sm:text-base line-clamp-2'>
                              {video.title}
                            </h3>
                          </Link>
                          <Link
                            href={`/channel/${video.channel.toLowerCase()}`}
                            className='block'>
                            <div className='flex items-center text-xs text-muted-foreground mt-1'>
                              <span>{video.channel}</span>
                              {video.verified && (
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
                          className='h-8 w-8 rounded-full self-start flex-shrink-0 opacity-0 group-hover:opacity-100 ml-2'>
                          <MoreVertical className='h-4 w-4' />
                          <span className='sr-only'>More options</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
