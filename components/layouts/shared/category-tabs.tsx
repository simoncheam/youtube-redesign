'use client';

import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const categories = [
  'All',
  'Subscriptions',
  'Posts',
  'Music',
  'Tech',
  'Design',
  'Live',
  'Playlists',
  'Cats',
  'Electronics',
  'New Creators',
  'Art',
  'Tech News',
  'Lofi beats',
  'UI/UX Redesign',
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className='relative mb-4 md:mb-6'>
      <ScrollArea className='w-full whitespace-nowrap pb-2'>
        <div className='flex w-max space-x-2 p-1'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                activeCategory === category
                  ? 'bg-white text-youtube-black'
                  : 'bg-youtube-card text-white hover:bg-youtube-hover'
              )}>
              {category}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
