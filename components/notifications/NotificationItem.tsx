import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Clock, Forward, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import { NotificationProps } from './notifications-dropdown';

export function NotificationItem({ notification }: { notification: NotificationProps }) {
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
