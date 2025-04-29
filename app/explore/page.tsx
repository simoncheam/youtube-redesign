'use client';

import { useState } from 'react';
import { Music2, Gamepad2 } from 'lucide-react';
import TrendingSection from '@/components/sections/trending-section';
import CategorySection from '@/components/sections/category-section';
import { trendingVideos } from '@/data/explore/trending';
import { musicVideos } from '@/data/explore/music';
import { gamingVideos } from '@/data/explore/gaming';

export default function ExplorePage() {
  const [musicTab, setMusicTab] = useState('New');
  const musicTabs = ['New', 'Playlists', 'Top Charts'];

  const [gamingTab, setGamingTab] = useState('Popular');
  const gamingTabs = ['Popular', 'Live', 'New Releases'];

  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Trending Section - 2x4 grid */}
      <TrendingSection videos={trendingVideos} />

      {/* Music Section - 1x4 grid */}
      <CategorySection
        title='Music'
        icon={<Music2 className='h-5 w-5 text-white' />}
        videos={musicVideos}
        activeTab={musicTab}
        tabs={musicTabs}
        onTabChange={setMusicTab}
        iconBackground='bg-youtube-red'
      />

      {/* Gaming Section - 1x4 grid */}
      <CategorySection
        title='Gaming'
        icon={<Gamepad2 className='h-5 w-5 text-white' />}
        videos={gamingVideos}
        activeTab={gamingTab}
        tabs={gamingTabs}
        onTabChange={setGamingTab}
        iconBackground='bg-youtube-red'
      />
    </div>
  );
}
