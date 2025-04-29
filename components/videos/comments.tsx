import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { comments } from '@/data/comments';

export default function Comments({ videoId }: { videoId?: string }) {
  return (
    <div className='mt-6'>
      <h2 className='mb-4 text-lg sm:text-xl font-bold'>Comments</h2>

      <div className='mb-6 flex gap-4'>
        <Avatar className='h-10 w-10 flex-shrink-0'>
          <AvatarImage
            src='/vibrant-street-market.png'
            alt='Your avatar'
          />
          <AvatarFallback>YA</AvatarFallback>
        </Avatar>
        <div className='flex-1'>
          <Textarea
            placeholder='Add a comment...'
            className='mb-2 bg-youtube-background-secondary border-youtube-border'
          />
          <div className='flex justify-end gap-2'>
            <Button variant='ghost'>Cancel</Button>
            <Button>Comment</Button>
          </div>
        </div>
      </div>

      <div className='space-y-6'>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className='flex gap-4'>
            <Avatar className='h-10 w-10 flex-shrink-0'>
              <AvatarImage
                src={comment.user.avatar || '/placeholder.svg'}
                alt={comment.user.name}
              />
              <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>{comment.user.name}</span>
                <span className='text-xs text-muted-foreground'>{comment.timestamp}</span>
              </div>
              <p className='mt-1 text-sm'>{comment.content}</p>
              <div className='mt-2 flex items-center gap-2'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 gap-1 px-2'>
                  <ThumbsUp className='h-4 w-4' />
                  <span>{comment.likes}</span>
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 px-2'>
                  <ThumbsDown className='h-4 w-4' />
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 px-3 text-xs'>
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
