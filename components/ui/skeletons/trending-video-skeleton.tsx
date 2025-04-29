import { Skeleton } from '@/components/ui/skeleton';

export function TrendingVideoSkeleton() {
  return (
    <div className='space-y-2'>
      <Skeleton className='aspect-video rounded-xl w-full' />
      <div className='flex gap-2'>
        <Skeleton className='h-9 w-9 rounded-full' />
        <div className='space-y-1 flex-1'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-3 w-24' />
        </div>
      </div>
    </div>
  );
}
