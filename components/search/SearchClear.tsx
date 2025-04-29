import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchClearProps {
  onClick: () => void;
}

export function SearchClear({ onClick }: SearchClearProps) {
  return (
    <Button
      type='button'
      variant='ghost'
      size='icon'
      className='absolute right-10 h-full text-muted-foreground hover:bg-transparent'
      onClick={onClick}>
      <X className='h-4 w-4' />
      <span className='sr-only'>Clear search</span>
    </Button>
  );
}
