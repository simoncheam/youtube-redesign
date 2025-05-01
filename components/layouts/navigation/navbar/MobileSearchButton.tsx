import { Search } from 'lucide-react';
import { Button } from '../../../ui/button';

export function MobileSearchButton() {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='text-white'>
      <Search className='h-5 w-5' />
    </Button>
  );
}
