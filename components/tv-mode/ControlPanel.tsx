'use client';

import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Settings, Maximize } from 'lucide-react';

interface ControlPanelProps {
  isPlaying: boolean;
  isMuted: boolean;
  onPlayToggle: () => void;
  onMuteToggle: () => void;
  onSkipBack?: () => void;
  onSkipForward?: () => void;
  onSettingsOpen?: () => void;
  onFullscreen?: () => void;
}

export function ControlPanel({
  isPlaying,
  isMuted,
  onPlayToggle,
  onMuteToggle,
  onSkipBack,
  onSkipForward,
  onSettingsOpen,
  onFullscreen,
}: ControlPanelProps) {
  return (
    <div className='flex items-center justify-between mt-2'>
      <div className='flex items-center gap-2 sm:gap-4'>
        <button
          className='hidden sm:block text-white hover:text-white/80'
          onClick={onSkipBack}>
          <SkipBack className='h-4 w-4 sm:h-5 sm:w-5' />
        </button>

        <button
          onClick={onPlayToggle}
          className='text-white hover:text-white/80'>
          {isPlaying ? <Pause className='h-5 w-5 sm:h-6 sm:w-6' /> : <Play className='h-5 w-5 sm:h-6 sm:w-6' />}
        </button>

        <button
          className='hidden sm:block text-white hover:text-white/80'
          onClick={onSkipForward}>
          <SkipForward className='h-4 w-4 sm:h-5 sm:w-5' />
        </button>

        <button
          onClick={onMuteToggle}
          className='text-white hover:text-white/80'>
          {isMuted ? <VolumeX className='h-4 w-4 sm:h-5 sm:w-5' /> : <Volume2 className='h-4 w-4 sm:h-5 sm:w-5' />}
        </button>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        <button
          className='text-white hover:text-white/80'
          onClick={onSettingsOpen}>
          <Settings className='h-4 w-4 sm:h-5 sm:w-5' />
        </button>

        <button
          className='text-white hover:text-white/80'
          onClick={onFullscreen}>
          <Maximize className='h-4 w-4 sm:h-5 sm:w-5' />
        </button>
      </div>
    </div>
  );
}
