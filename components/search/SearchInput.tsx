// components/search/search-input.tsx
import { cn } from '@/lib/utils';
import { useSearch } from './useSearch';
import { SearchIcon } from './SearchIcon';
import { SearchField } from './SearchField';
import { SearchVoice } from './SearchVoice';
import { SearchSubmit } from './SearchSubmit';
import { SearchClear } from './SearchClear';

interface SearchInputProps {
  className?: string;
  showMicButton?: boolean;
  isCompact?: boolean;
  onSearch?: (term: string) => void;
  defaultValue?: string;
}

export function SearchInput({
  className,
  showMicButton = true,
  isCompact = false,
  onSearch,
  defaultValue = '',
}: SearchInputProps) {
  const { searchTerm, setSearchTerm, isFocused, setIsFocused, inputRef, handleSubmit, handleClear } = useSearch({
    defaultValue,
    onSearch,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('w-full', className)}>
      <div className='relative flex items-center'>
        <SearchIcon />

        <SearchField
          ref={inputRef}
          isCompact={isCompact}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {searchTerm && <SearchClear onClick={handleClear} />}

        {showMicButton ? <SearchVoice /> : <SearchSubmit />}
      </div>
    </form>
  );
}
