'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Clock, Settings } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { mockNotifications } from './notifications-dropdown';
import { NotificationItem } from './NotificationItem';

export function NotificationsButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='text-white relative'>
          <Bell className='h-5 w-5' />
          <span className='sr-only'>Notifications</span>
          <span className='absolute top-1 right-1 w-2 h-2 bg-youtube-red rounded-full'></span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='w-80 sm:w-96 p-0'
        align='end'
        sideOffset={5}>
        <NotificationsContent />
      </PopoverContent>
    </Popover>
  );
}

function NotificationsContent() {
  return (
    <div className='max-h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden bg-youtube-black border border-youtube-border rounded-lg shadow-lg'>
      {/* Header section */}
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

      {/* Notifications list */}
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
  );
}
