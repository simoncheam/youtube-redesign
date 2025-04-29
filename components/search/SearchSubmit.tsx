import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SearchSubmit() {
  return (
    <Button
      type='submit'
      variant='ghost'
      size='icon'
      className='absolute right-0 h-full rounded-l-none rounded-r-full bg-youtube-card border-l border-youtube-border'>
      <Search className='h-5 w-5' />
      <span className='sr-only'>Search</span>
    </Button>
  );
}
