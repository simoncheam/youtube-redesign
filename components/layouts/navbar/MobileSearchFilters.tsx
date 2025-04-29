import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FilterOption {
  label: string;
  value: string;
}

interface MobileSearchFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
}

const filters: FilterOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Videos', value: 'videos' },
  { label: 'Shorts', value: 'shorts' },
  { label: 'Watched', value: 'watched' },
  { label: 'Live', value: 'live' },
  { label: 'Posts', value: 'posts' },
];

export function MobileSearchFilters({ selectedFilter, onFilterChange, className }: MobileSearchFiltersProps) {
  return (
    <ScrollArea className={cn('w-full whitespace-nowrap', className)}>
      <div className='flex items-center space-x-2 py-1'>
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant='ghost'
            size='sm'
            className={cn(
              'rounded-full px-3 h-8 text-sm',
              selectedFilter === filter.value
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-youtube-card text-white hover:bg-youtube-hover'
            )}
            onClick={() => onFilterChange(filter.value)}>
            {filter.label}
          </Button>
        ))}
      </div>
      <ScrollBar
        orientation='horizontal'
        className='h-2'
      />
    </ScrollArea>
  );
}
