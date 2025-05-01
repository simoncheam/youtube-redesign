import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import { PATHS } from '@/lib/constants';

interface VideoChannel {
  id: string;
  name: string;
  avatar?: string;
}

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
  duration?: string;
  views: string;
  timestamp: string;
  channel?: VideoChannel;
  metadata?: {
    duration?: string;
  };
}

interface MobileVideoCardProps {
  video: Video;
}

export default function MobileVideoCard({ video }: MobileVideoCardProps) {
  return (
    <div className='space-y-2'>
      <Link
        href={`${PATHS.ROUTES.WATCH}/${video.id}`}
        className='block relative'>
        <div className='aspect-video relative overflow-hidden'>
          <Image
            src={video.thumbnail || '/placeholder.svg'}
            alt={video.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded'>
            {video.duration || video.metadata?.duration || 'N/A'}
          </div>
        </div>
      </Link>

      <div className='px-4 flex gap-3'>
        {video.channel && (
          <Link
            href={`${PATHS.ROUTES.CHANNEL}/${video.channel.id}`}
            className='flex-shrink-0'>
            <Image
              src={video.channel.avatar || '/placeholder.svg'}
              alt={video.channel.name}
              width={36}
              height={36}
              className='rounded-full h-9 w-9'
            />
          </Link>
        )}

        <div className='flex-1 min-w-0'>
          <Link
            href={`${PATHS.ROUTES.WATCH}/${video.id}`}
            className='block'>
            <h3 className='font-medium text-sm line-clamp-2 text-white'>{video.title}</h3>
            <p className='text-xs text-gray-400 mt-1'>
              {video.channel?.name || 'Unknown Channel'} • {video.views} • {video.timestamp}
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
    </div>
  );
}
