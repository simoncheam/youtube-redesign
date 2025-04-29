// Refactored app/explore/loading.tsx
import { Skeleton } from '@/components/ui/skeleton';
import { Music2, Gamepad2 } from 'lucide-react';
import { TrendingVideoSkeleton } from '@/components/ui/skeletons/trending-video-skeleton';
import { CategorySectionSkeleton } from '@/components/ui/skeletons/category-section-skeleton';

export default function Loading() {
  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Trending Section - 2x4 grid */}
      <div className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <Skeleton className='h-6 w-36' />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <TrendingVideoSkeleton key={i} />
            ))}
        </div>
      </div>

      {/* Music Section - 1x4 grid */}
      <CategorySectionSkeleton
        icon={
          <div className='bg-youtube-red p-1.5 rounded-lg'>
            <Music2 className='h-5 w-5 text-white' />
          </div>
        }
        tabs={['New', 'Playlists', 'Top Charts']}
      />

      {/* Gaming Section - 1x4 grid */}
      <CategorySectionSkeleton
        icon={
          <div className='bg-youtube-red p-1.5 rounded-lg'>
            <Gamepad2 className='h-5 w-5 text-white' />
          </div>
        }
        tabs={['Popular', 'Live', 'New Releases']}
      />
    </div>
  );
}
