'use client';

import { useState, useRef, RefObject } from 'react';

interface UseSearchProps {
  defaultValue?: string;
  onSearch?: (term: string) => void;
}

export function useSearch({ defaultValue = '', onSearch }: UseSearchProps) {
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    inputRef.current?.focus();
  };

  return {
    searchTerm,
    setSearchTerm,
    isFocused,
    setIsFocused,
    inputRef,
    handleSubmit,
    handleClear
  };
}
