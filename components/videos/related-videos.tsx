import Image from 'next/image';
import Link from 'next/link';
import { relatedVideos } from '@/data/related-videos';

export default function RelatedVideos() {
  return (
    <div className='space-y-4'>
      {relatedVideos.map((video) => (
        <Link
          key={video.id}
          href={`/watch?v=${video.id}`}
          className='group flex gap-2'>
          <div className='relative aspect-video w-32 sm:w-40 flex-none overflow-hidden rounded-lg'>
            <Image
              src={video.thumbnail || '/placeholder.svg'}
              alt={video.title}
              width={640}
              height={360}
              className='object-cover transition-transform group-hover:scale-105'
            />
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='text-sm font-medium leading-tight group-hover:text-primary line-clamp-2'>{video.title}</h3>
            <div className='mt-1 text-xs text-muted-foreground'>
              <div>{video.channel}</div>
              <div>
                {video.views} • {video.timestamp}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
