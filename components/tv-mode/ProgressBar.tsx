'use client';

interface ProgressBarProps {
  currentTime: string;
  duration: string;
  progress: number; // 0-100
  onSeek?: (position: number) => void;
}

export function ProgressBar({ currentTime, duration, progress, onSeek }: ProgressBarProps) {
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onSeek) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    onSeek(Math.max(0, Math.min(100, position * 100)));
  };

  return (
    <>
      <div
        className='w-full bg-white/30 h-1 rounded-full overflow-hidden cursor-pointer'
        onClick={handleProgressClick}>
        <div
          className='bg-red-600 h-full transition-all duration-100'
          style={{ width: `${progress}%` }}></div>
      </div>
      <div className='flex items-center justify-between mt-1 text-white text-xs'>
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </>
  );
}
