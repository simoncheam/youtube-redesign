'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface DemoLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  message?: string;
  implemented?: boolean;
}

export function DemoLink({
  href,
  children,
  className,
  message = "This feature isn't implemented in the demo",
  implemented = false,
}: DemoLinkProps) {
  // If the route is implemented, use a regular Link
  if (implemented) {
    return (
      <Link
        href={href}
        className={className}>
        {children}
      </Link>
    );
  }

  // Otherwise, show a toast and prevent navigation
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    toast.error(message, {
      duration: 5000,
    });
  };

  return (
    <div
      className={cn('flex items-center', className)}
      onClick={handleClick}>
      {children}
    </div>
  );
}
