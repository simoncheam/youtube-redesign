'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isCompact?: boolean;
}
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ className, isCompact = false, ...props }, ref) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set('search', value);
      } else {
        params.delete('search');
      }
      replace(`/?${params.toString()}`);
    }, 500);

    return (
      <Input
        ref={ref}
        type='search'
        placeholder='Search'
        className={cn(
          'pl-10 pr-16 py-2 bg-youtube-background-secondary border-youtube-border',
          'focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500',
          'search-input-no-default-clear',
          isCompact ? 'h-9' : 'h-10',
          'w-full',
          className
        )}
        {...props}
      />
    );
  }
);

SearchField.displayName = 'SearchField';
