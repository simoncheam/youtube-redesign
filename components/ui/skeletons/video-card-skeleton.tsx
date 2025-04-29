import { Skeleton } from '@/components/ui/skeleton';

export function VideoCardSkeleton({ aspectRatio = 'video' }: { aspectRatio?: 'video' | 'square' }) {
  return (
    <div className='space-y-2'>
      <Skeleton className={`${aspectRatio === 'video' ? 'aspect-video' : 'aspect-square'} rounded-xl w-full`} />
      <div className='flex gap-2'>
        <Skeleton className='h-9 w-9 rounded-full' />
        <div className='space-y-1 flex-1'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-3 w-24' />
          <Skeleton className='h-3 w-32' />
        </div>
      </div>
    </div>
  );
}
