import { Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SearchVoice() {
  return (
    <Button
      type='button'
      variant='ghost'
      size='icon'
      className='absolute right-0 h-full rounded-l-none rounded-r-full hover:bg-youtube-button-hover'>
      <Mic className='h-5 w-5' />
      <span className='sr-only'>Search with voice</span>
    </Button>
  );
}
