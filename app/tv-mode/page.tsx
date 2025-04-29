'use client';

import { useState, useEffect } from 'react';
import { videos } from '@/data/videos';

import { VideoPlayer } from '@/components/tv-mode/VideoPlayer';
import { ProgressBar } from '@/components/tv-mode/ProgressBar';
import { ControlPanel } from '@/components/tv-mode/ControlPanel';
import { VideoInfo } from '@/components/tv-mode/VideoInfo';
import { NavigationControls } from '@/components/tv-mode/NavigationControls';

export default function TVModePage() {
  // Get the YouTube redesign video
  const youtubeRedesignVideo = videos.find((v) => v.id === 'youtube-redesign') || videos[0];

  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(33);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);

  // Handle mouse movement to show controls
  const handleMouseMove = () => {
    setShowControls(true);

    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }

    const timeout = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    setControlsTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
    };
  }, [controlsTimeout]);

  // Get duration from video metadata
  const duration = youtubeRedesignVideo.metadata?.duration || '12:07';
  const currentTime = '0:45';

  return (
    <div
      className='relative h-[calc(100vh-80px)] bg-black flex flex-col rounded-xl overflow-hidden'
      onMouseMove={handleMouseMove}>
      <VideoPlayer
        video={youtubeRedesignVideo}
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
      />

      {showControls && (
        <>
          <VideoInfo
            video={{
              title: youtubeRedesignVideo.title,
              channel: youtubeRedesignVideo.channel,
              category: youtubeRedesignVideo.category || 'Design',
            }}
            onClose={() => window.history.back()}
          />

          <div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 to-transparent'>
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              progress={progress}
              onSeek={(pos) => setProgress(pos)}
            />

            <ControlPanel
              isPlaying={isPlaying}
              isMuted={isMuted}
              onPlayToggle={() => setIsPlaying(!isPlaying)}
              onMuteToggle={() => setIsMuted(!isMuted)}
              onFullscreen={() => document.documentElement.requestFullscreen()}
            />

            <div className='hidden sm:flex items-center gap-2 mt-4 text-white text-xs'>
              <span>
                Topic: {youtubeRedesignVideo.category} • {youtubeRedesignVideo.views} • {youtubeRedesignVideo.timestamp}
              </span>
            </div>
          </div>
        </>
      )}

      <NavigationControls
        onPrevious={() => console.log('Previous video')}
        onNext={() => console.log('Next video')}
      />
    </div>
  );
}
