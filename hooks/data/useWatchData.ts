import { missedVideos } from '@/data/home/missed-videos';
import { allVideos } from '@/data/videos';
import { useMemo } from 'react';

export function useWatchData(videoId: string) {
  // Combine all video sources
  const allVideoSources = useMemo(() => [...allVideos, ...missedVideos], []);

  // Find the current video
  const currentVideo = useMemo(() => {
    return allVideoSources.find((v) => v.id === videoId) || allVideoSources[0];
  }, [allVideoSources, videoId]);

  // Get related videos (exclude current video)
  const relatedVideos = useMemo(() => {
    return allVideoSources
      .filter((v) => v.id !== currentVideo.id)
      .slice(0, 5); // Limit to 5 related videos
  }, [allVideoSources, currentVideo.id]);

  // Get video comments
  const videoComments = useMemo(() => {
    return comments.filter(c => c.videoId === videoId);
  }, [videoId]);

  // Utility functions
  const formatLikeCount = (count: string = '0') => {
    // Format logic
    return count;
  };

  return {
    video: currentVideo,
    relatedVideos,
    comments: videoComments,
    likeCount: formatLikeCount(currentVideo.likes),
    dislikeCount: formatLikeCount(currentVideo.dislikes),
    isLiked: false, // Would be dynamic in a real app
    isDisliked: false,
    toggleLike: () => console.log('Toggle like'),
    toggleDislike: () => console.log('Toggle dislike'),
    shareVideo: () => console.log('Share video'),
  };

}