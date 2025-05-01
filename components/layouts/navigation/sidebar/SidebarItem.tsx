'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DemoLink } from '@/components/layouts/shared/DemoLink';
import { ReactNode } from 'react';

interface SidebarItemProps {
  icon?: ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
  className?: string;
  isCompact?: boolean;
  isImplemented?: boolean;
}

/**
 * SidebarItem component for navigation links
 *
 * This component represents a link in the sidebar navigation
 * with an optional icon and customizable styling.
 */
export function SidebarItem({
  icon,
  label,
  href,
  onClick,
  className,
  isCompact = false,
  isImplemented = true,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Common styling
  const buttonClass = cn(
    'w-full flex items-center justify-start gap-3 rounded-lg',
    !isCompact && 'px-3 py-2',
    isCompact && 'py-1.5 text-sm',
    isActive && 'bg-youtube-card font-medium',
    !isImplemented && 'opacity-60',
    className
  );

  // Common content
  const content = (
    <>
      {icon && (
        <span className={cn('flex-shrink-0 w-5 h-5 flex items-center justify-center', isActive && 'active-nav-icon')}>
          {icon}
        </span>
      )}
      <span>{label}</span>
    </>
  );

  // Use DemoLink for unimplemented routes
  if (!isImplemented) {
    return (
      <DemoLink
        href={href}
        message={`The ${label} feature is not available in this demo`}
        className={buttonClass}>
        {content}
      </DemoLink>
    );
  }

  // Use regular Link for implemented routes
  return (
    <Button
      asChild
      variant='ghost'
      className={buttonClass}
      onClick={isImplemented ? onClick : undefined}>
      <Link href={isImplemented ? href : '#'}>{content}</Link>
    </Button>
  );
}
