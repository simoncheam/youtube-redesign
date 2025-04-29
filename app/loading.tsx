import { VideoCardSkeleton } from '@/components/ui/skeletons/video-card-skeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Featured video skeleton */}
      <div className='mb-8'>
        <Skeleton className='h-8 w-48 mb-4' />
        <VideoCardSkeleton />
      </div>

      {/* Video grid skeleton */}
      <Skeleton className='h-8 w-48 mb-4' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <VideoCardSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}
