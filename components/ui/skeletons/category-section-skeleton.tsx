import { Skeleton } from '@/components/ui/skeleton';
import { VideoCardSkeleton } from '@/components/ui/skeletons/video-card-skeleton';
import { ReactNode } from 'react';

export function CategorySectionSkeleton({
  icon,
  tabs = ['Tab 1', 'Tab 2', 'Tab 3'],
  videoCount = 4,
}: {
  icon: ReactNode;
  tabs?: string[];
  videoCount?: number;
}) {
  return (
    <div className='mb-8'>
      <div className='flex items-center gap-2 mb-4'>
        {icon}
        <Skeleton className='h-6 w-24' />
        <div className='ml-auto flex gap-2'>
          {tabs.map((_, i) => (
            <Skeleton
              key={i}
              className='h-8 w-20 rounded-full'
            />
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array(videoCount)
          .fill(0)
          .map((_, i) => (
            <VideoCardSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}
