import Image from 'next/image';
import { Play } from 'lucide-react';
import type { VideoData } from '@/data/videos';
export default function VideoPlayer({ video }: { video: VideoData }) {
  return (
    <div className='relative aspect-video w-full overflow-hidden rounded-xl bg-black'>
      <Image
        src={video.thumbnail || '/placeholder.svg'}
        alt='Video'
        width={1280}
        height={720}
        className='object-cover'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <button className='flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20'>
          <Play
            className='h-8 w-8 text-white'
            fill='white'
          />
        </button>
      </div>
    </div>
  );
}
