import CategoryTabs from '@/components/navigation/category-tabs';
import MissedVideosSection from '@/components/sections/missed-videos-section';
import SuggestionsSection from '@/components/sections/suggestions-section';
import HomeShortsSection from '@/components/sections/home-shorts-section';
import VideoGrid from '@/components/videos/cards/video-grid';

import { channels } from '@/data/channels';
import { mobileHomeVideos } from '@/data/home/videos';
import MobileChannelList from '@/components/home/MobileChannelList';
import MobileCategoryButtons from '@/components/home/MobileCategoryButtons';
import MobileVideoFeed from '@/components/home/MobileVideoFeed';

export default function Home() {
  return (
    <>
      <div className='md:hidden'>
        <MobileChannelList channels={channels.slice(0, 5)} />
        <MobileCategoryButtons />
        <MobileVideoFeed videos={mobileHomeVideos} />
      </div>

      <div className='hidden md:block w-full max-w-[1800px] mx-auto px-4 py-4 md:py-6'>
        <CategoryTabs />
        <MissedVideosSection />
        <VideoGrid />
        <SuggestionsSection />
        <HomeShortsSection />
      </div>
    </>
  );
}
