'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DemoLink } from '@/components/layouts/shared/DemoLink';
import { ReactNode } from 'react';

interface MiniSidebarItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
  isImplemented?: boolean;
}

/**
 * MiniSidebarItem component for the collapsed sidebar
 *
 * This component represents an icon-only navigation item with a tooltip
 * for the mini/collapsed version of the sidebar.
 */
export function MiniSidebarItem({ icon, label, href, onClick, isImplemented = true }: MiniSidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Common styling
  const buttonClass = cn(
    'w-full h-14 flex flex-col items-center justify-center gap-1 rounded-lg p-2',
    isActive && 'bg-youtube-card',
    !isImplemented && 'opacity-60'
  );

  // Common content
  const content = <span className={cn('h-5 w-5', isActive && 'active-nav-icon')}>{icon}</span>;

  // Wrap in tooltip
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {!isImplemented ? (
            <DemoLink
              href={href}
              message={`The ${label} feature is not available in this demo`}
              className={buttonClass}>
              {content}
            </DemoLink>
          ) : (
            <Button
              asChild
              variant='ghost'
              className={buttonClass}
              onClick={isImplemented ? onClick : undefined}>
              <Link href={isImplemented ? href : '#'}>{content}</Link>
            </Button>
          )}
        </TooltipTrigger>
        {label !== 'Home' && (
          <TooltipContent
            side='right'
            sideOffset={10}>
            <p>{label}</p>
            {!isImplemented && <p className='text-xs text-gray-400'>(Coming soon)</p>}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
