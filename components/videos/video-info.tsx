import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from 'lucide-react';
import type { VideoData } from '@/data/videos';

export default function VideoInfo({ video }: { video: VideoData }) {
  return (
    <div className='mt-4 space-y-4'>
      <h1 className='text-xl font-bold md:text-2xl'>{video.title}</h1>

      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <Avatar className='h-10 w-10'>
            <AvatarImage
              src={video.channel.avatar}
              alt='Channel'
            />
            <AvatarFallback>{video.channel.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className='font-medium'>{video.channel.name}</div>
            <div className='text-sm text-muted-foreground'>{video.channel.subscribers} subscribers</div>
          </div>
          <Button className='ml-4 bg-white text-black hover:bg-white/90'>Subscribe</Button>
        </div>

        <div className='flex flex-wrap gap-2'>
          <div className='flex overflow-hidden rounded-full bg-youtube-background-hover'>
            <Button
              variant='ghost'
              className='gap-1 rounded-r-none border-r border-youtube-background-secondary'>
              <ThumbsUp className='h-4 w-4' />
              <span>{video.likes}</span>
            </Button>
            <Button
              variant='ghost'
              className='gap-1 rounded-l-none'>
              <ThumbsDown className='h-4 w-4' />
            </Button>
          </div>

          <Button
            variant='ghost'
            className='gap-2 rounded-full bg-youtube-background-hover'>
            <Share2 className='h-4 w-4' />
            <span>Share</span>
          </Button>

          <Button
            variant='ghost'
            className='gap-2 rounded-full bg-youtube-background-hover'>
            <Download className='h-4 w-4' />
            <span>Download</span>
          </Button>

          <Button
            variant='ghost'
            size='icon'
            className='rounded-full bg-youtube-background-hover'>
            <MoreHorizontal className='h-4 w-4' />
            <span className='sr-only'>More</span>
          </Button>
        </div>
      </div>

      <div className='rounded-xl bg-youtube-background-hover p-3'>
        <div className='flex items-center gap-2 text-sm'>
          <span>{video.views}</span>
          <span className='text-muted-foreground'>•</span>
          <span>{video.timestamp}</span>
        </div>
        <p className='mt-2 text-sm'>{video.description}</p>
      </div>
    </div>
  );
}
