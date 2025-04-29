'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuButtonProps {
  onClick?: () => void;
  className?: string;
}

export function MenuButton({ onClick, className }: MenuButtonProps) {
  return (
    <Button
      variant='ghost'
      size='icon'
      className={cn('text-white', className)}
      onClick={onClick}
      aria-label='Toggle menu'>
      <Menu className='h-5 w-5' />
      <span className='sr-only'>Toggle menu</span>
    </Button>
  );
}
