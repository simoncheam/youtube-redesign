import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = [
  { id: 'all', label: 'All', icon: true, primary: true },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'posts', label: 'Posts' },
  { id: 'new', label: 'New' },
];

export default function MobileCategoryButtons() {
  return (
    <ScrollArea className='w-full'>
      <div className='flex gap-2 px-4 py-2'>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={category.primary ? 'secondary' : 'outline'}
            size='sm'
            className={`rounded-full whitespace-nowrap ${
              category.primary ? 'bg-white text-black' : 'bg-youtube-card text-white'
            }`}>
            {category.icon && (
              <svg
                className='w-4 h-4 mr-1'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4 6H20M4 12H20M4 18H20'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
            {category.label}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
