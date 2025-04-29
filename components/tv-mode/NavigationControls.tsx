'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

export function NavigationControls({ onPrevious, onNext }: NavigationControlsProps) {
  return (
    <>
      <button
        className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white'
        onClick={onPrevious}>
        <ChevronLeft className='h-6 w-6 sm:h-8 sm:w-8' />
      </button>

      <button
        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white'
        onClick={onNext}>
        <ChevronRight className='h-6 w-6 sm:h-8 sm:w-8' />
      </button>
    </>
  );
}
