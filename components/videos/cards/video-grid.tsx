import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { videoGridData } from '@/data/home/videos';
import { PATHS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

interface VideoGridProps {
  title?: string;
}

export default function VideoGrid({ title }: VideoGridProps) {
  return (
    <div className='mb-8'>
      {title && <h2 className='text-lg md:text-xl font-bold mb-4'>{title}</h2>}
      {/* Updated grid to ensure 3 columns on large screens */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {videoGridData.map((video) => (
          <Link
            key={video.id}
            href={`${PATHS.ROUTES.WATCH}/${video?.id}`}
            className='group'>
            <div className='space-y-2'>
              <div className='relative aspect-video overflow-hidden rounded-xl'>
                <Image
                  src={video.thumbnail || '/placeholder.svg'}
                  alt={video?.title || 'Video Title'}
                  width={1280}
                  height={720}
                  className='object-cover transition-transform group-hover:scale-105'
                />
                {video?.metadata?.duration && (
                  <div className='absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs rounded'>
                    {video?.metadata?.duration}
                  </div>
                )}
              </div>
              <div className='flex gap-2'>
                <Avatar className='h-9 w-9 rounded-full'>
                  <AvatarImage
                    src={video?.channel?.avatar || '/placeholder.svg'}
                    alt={video?.channel?.name || 'Channel'}
                  />
                  <AvatarFallback>{video?.channel?.name?.charAt(0) || '?'}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className='font-medium leading-tight group-hover:text-primary text-sm line-clamp-2'>
                    {video.title}
                  </h3>
                  <div className='text-xs text-muted-foreground'>
                    <div>{video.channel?.name}</div>
                    <div>
                      {video.views} • {video.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
