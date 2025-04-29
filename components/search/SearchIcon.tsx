import { Search } from 'lucide-react';

export function SearchIcon() {
  return (
    <div className='absolute left-3 flex items-center justify-center pointer-events-none'>
      <Search className='h-4 w-4 text-muted-foreground' />
    </div>
  );
}
