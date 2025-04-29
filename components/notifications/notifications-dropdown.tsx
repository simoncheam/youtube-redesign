'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Clock, Settings, MoreVertical, Forward } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotificationProps {
  id: string;
  type: 'upload' | 'share';
  channel: {
    name: string;
    avatar: string;
  };
  sharedVideoTitle?: string;
  sharedVideoChannel?: string;
  content: string;
  thumbnail?: string;
  time: string;
}

const mockNotifications: NotificationProps[] = [
  {
    id: 'notif1',
    type: 'upload',
    channel: {
      name: 'Juxtopposed',
      avatar: '/images/users/juxtopposed-transparent.png',
    },
    content: 'uploaded: I Redesigned the ENTIRE YouTube UI',
    thumbnail: '/images/home/youtube-ui-redesign-complete.png',
    time: '20 min ago',
  },
  {
    id: 'notif2',
    type: 'share',
    channel: {
      name: 'YouTubeEnjoyer',
      avatar: '/images/users/YouTubeEnjoyer.png',
    },
    content: 'shared with you:',
    sharedVideoTitle: 'Put this cat in jail',
    sharedVideoChannel: 'DailyDoseOfInternet',
    thumbnail: '/images/shorts/orange-cat-jail-thumbnail.webp',
    time: '3h ago',
  },
];

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsDropdown({ isOpen, onClose }: NotificationsDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className='fixed inset-0 z-40'
        onClick={onClose}
      />

      <div className='absolute top-full right-0 mt-1 w-80 sm:w-96 max-h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden bg-youtube-black border border-youtube-border rounded-lg shadow-lg z-50'>
        <div className='sticky top-0 bg-youtube-black border-b border-youtube-border p-4 flex items-center justify-between z-20'>
          <h2 className='font-medium'>Notifications</h2>
          <div className='flex items-center gap-2'>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full h-8 w-8'>
              <Settings className='h-4 w-4' />
              <span className='sr-only'>Notification settings</span>
            </Button>
          </div>
        </div>

        <div className='p-2 space-y-2'>
          {mockNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}

          {mockNotifications.length === 0 && (
            <div className='flex flex-col items-center justify-center py-8 px-4 text-center'>
              <Clock className='h-12 w-12 text-muted-foreground mb-2' />
              <p className='text-muted-foreground'>No notifications yet</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function NotificationItem({ notification }: { notification: NotificationProps }) {
  const isShare = notification.type === 'share';

  return (
    <div className={cn('flex gap-3 p-3 rounded-lg hover:bg-youtube-hover cursor-pointer')}>
      <Avatar className='h-10 w-10 flex-shrink-0 mt-1'>
        <AvatarImage
          src={notification.channel.avatar || '/placeholder.svg'}
          alt={notification.channel.name}
        />
        <AvatarFallback>{notification.channel.name[0]}</AvatarFallback>
      </Avatar>

      <div className='flex-1 min-w-0'>
        <div className='flex items-start justify-between gap-2'>
          <div className='flex-1'>
            <p className='text-sm leading-tight'>
              <span className='font-medium text-youtube-red'>{notification.channel.name}</span>{' '}
              <span className='text-white'>{notification.content}</span>
            </p>
            <p className='text-xs text-muted-foreground mt-1'>{notification.time}</p>

            {isShare && notification.sharedVideoTitle && (
              <div className='mt-2 p-2 rounded-md bg-zinc-800 flex gap-2 items-start'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-white line-clamp-2'>{notification.sharedVideoTitle}</p>
                  {notification.sharedVideoChannel && (
                    <p className='text-xs text-muted-foreground'>{notification.sharedVideoChannel}</p>
                  )}
                </div>
                {notification.thumbnail && (
                  <div className='relative aspect-square w-16 h-16 overflow-hidden rounded flex-shrink-0'>
                    <Image
                      src={notification.thumbnail}
                      alt='Shared video thumbnail'
                      fill
                      className='object-cover'
                    />
                  </div>
                )}
              </div>
            )}

            <div className='flex items-center gap-2 mt-2'>
              <Button
                variant='secondary'
                size='sm'
                className='bg-zinc-700 hover:bg-zinc-600 text-white rounded-full text-xs h-7 px-3'>
                <Clock className='h-3.5 w-3.5 mr-1.5' /> Watch later
              </Button>
              <Button
                variant='secondary'
                size='sm'
                className='bg-zinc-700 hover:bg-zinc-600 text-white rounded-full text-xs h-7 px-3'>
                <Forward className='h-3.5 w-3.5 mr-1.5' /> Share
              </Button>
            </div>
          </div>

          {!isShare && notification.thumbnail && (
            <div className='mt-1 relative aspect-video w-20 h-auto overflow-hidden rounded flex-shrink-0'>
              <Image
                src={notification.thumbnail}
                alt='Notification thumbnail'
                fill
                className='object-cover'
              />
            </div>
          )}

          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 flex-shrink-0 text-gray-400 hover:text-white -mt-1'>
            <MoreVertical className='h-4 w-4' />
            <span className='sr-only'>More options</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
