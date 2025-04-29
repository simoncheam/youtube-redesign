import { Skeleton } from '@/components/ui/skeleton';

export function CommentSkeleton() {
  return (
    <div className='flex gap-3'>
      <Skeleton className='h-8 w-8 rounded-full flex-shrink-0' />
      <div className='space-y-2 flex-1'>
        <Skeleton className='h-4 w-32' />
        <Skeleton className='h-3 w-full' />
        <Skeleton className='h-3 w-3/4' />
      </div>
    </div>
  );
}
