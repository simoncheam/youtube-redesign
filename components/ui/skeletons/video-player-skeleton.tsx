import { Skeleton } from '@/components/ui/skeleton';

export function VideoPlayerSkeleton() {
  return (
    <div className='space-y-4'>
      <Skeleton className='aspect-video w-full rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-6 w-3/4' />
        <div className='flex items-center gap-2'>
          <Skeleton className='h-10 w-10 rounded-full' />
          <div className='space-y-1'>
            <Skeleton className='h-4 w-40' />
            <Skeleton className='h-3 w-24' />
          </div>
        </div>
      </div>
    </div>
  );
}
