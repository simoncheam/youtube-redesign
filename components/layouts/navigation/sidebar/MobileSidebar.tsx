'use client';

import { Logo } from '@/components/common/Logo';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useExpandableSections } from '@/hooks/ui/useExpandableSections';
import { cn } from '@/lib/utils';
import { SidebarContent } from './SidebarContent';

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

export function MobileSidebar({ isOpen, onOpenChange, className }: SidebarProps) {
  const { sections, toggleSection } = useExpandableSections();

  return (
    <Sheet
      open={isOpen}
      onOpenChange={onOpenChange}>
      <SheetContent
        side='left'
        className={cn('p-0 bg-youtube-black w-64 border-r border-youtube-border z-50', className)}
        forceMount>
        <SheetHeader className='p-4 border-b border-youtube-border flex flex-row items-center justify-between'>
          <SheetTitle className='flex items-center gap-1'>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <SidebarContent
          isMobile={true}
          onItemClick={() => onOpenChange(false)}
          expandedSections={sections}
          toggleSection={toggleSection}
        />
      </SheetContent>
    </Sheet>
  );
}
