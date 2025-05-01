'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mic, Search, X } from 'lucide-react';
import { useRef, useState } from 'react';

interface SearchBarProps {
  className?: string;
  showMicButton?: boolean;
  onSearch: (term: string) => void;
  onFocusChange?: (focused: boolean) => void;
}

export function SearchBar({ className = '', showMicButton = false, onSearch, onFocusChange }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setSearchTerm('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center ${className}`}>
      <div className='relative flex-1'>
        <Input
          ref={inputRef}
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => onFocusChange?.(true)}
          onBlur={() => onFocusChange?.(false)}
          className='pl-4 pr-10 py-2 w-full bg-youtube-card border-youtube-border text-white'
        />
        {searchTerm && (
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400'
            onClick={handleClear}>
            <X className='h-4 w-4' />
            <span className='sr-only'>Clear</span>
          </Button>
        )}
      </div>

      <Button
        type='submit'
        variant='secondary'
        size='icon'
        className='ml-1 bg-youtube-card border border-youtube-border text-gray-400'>
        <Search className='h-4 w-4' />
        <span className='sr-only'>Search</span>
      </Button>

      {showMicButton && (
        <Button
          type='button'
          variant='ghost'
          size='icon'
          className='ml-1 text-white'>
          <Mic className='h-5 w-5' />
          <span className='sr-only'>Search with voice</span>
        </Button>
      )}
    </form>
  );
}
