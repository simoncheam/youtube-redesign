import MobileVideoCard from './MobileVideoCard';

type Video = {
  id: string;
  title: string;
  thumbnail?: string;
  duration?: string;
  views: string;
  timestamp: string;
  channel?: {
    id: string;
    name: string;
    avatar?: string;
  };
  metadata?: {
    duration?: string;
  };
};

interface MobileVideoFeedProps {
  videos: Video[];
}

export default function MobileVideoFeed({ videos }: MobileVideoFeedProps) {
  return (
    <div className='mt-2 space-y-4 pb-4'>
      {videos.map((video) => (
        <MobileVideoCard
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
}
