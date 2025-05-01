'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { ReactNode } from 'react';

interface ExpandableSectionProps {
  title: string;
  icon: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * ExpandableSection component for sidebar navigation sections
 *
 * This component represents a collapsible section in the navigation menu
 * with a title, icon, and expandable content area for child items.
 */
export function ExpandableSection({
  title,
  icon,
  isExpanded,
  onToggle,
  children,
  onClick,
  className,
}: ExpandableSectionProps) {
  return (
    <div className={`space-y-1 ${className || ''}`}>
      <Button
        variant='ghost'
        className='w-full justify-between rounded-lg px-3 py-2 text-left'
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
          if (onClick) onClick();
        }}
        aria-expanded={isExpanded}
        aria-controls={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className='flex items-center gap-3'>
          <span className='text-gray-300'>{icon}</span>
          <span>{title}</span>
        </div>
        <span>
          {isExpanded ? (
            <ChevronUp className='h-4 w-4 text-gray-400' />
          ) : (
            <ChevronDown className='h-4 w-4 text-gray-400' />
          )}
        </span>
      </Button>

      {isExpanded && (
        <div
          className='pl-10 space-y-1'
          id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {children}
        </div>
      )}
    </div>
  );
}
