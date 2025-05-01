'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Clock, Forward, MoreVertical, Settings } from 'lucide-react';
import Image from 'next/image';
import { forwardRef } from 'react';
import { NotificationItem } from './NotificationItem';

export interface NotificationProps {
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

export const mockNotifications: NotificationProps[] = [
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

const NotificationsDropdown = forwardRef<HTMLDivElement, NotificationsDropdownProps>(({ isOpen, onClose }, ref) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className='fixed inset-0 z-40'
        onClick={onClose}
      />

      <div
        ref={ref}
        className='absolute top-full right-0 mt-1 w-80 sm:w-96 max-h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden bg-youtube-black border border-youtube-border rounded-lg shadow-lg z-50'>
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
});

NotificationsDropdown.displayName = 'NotificationsDropdown';

export default NotificationsDropdown;
