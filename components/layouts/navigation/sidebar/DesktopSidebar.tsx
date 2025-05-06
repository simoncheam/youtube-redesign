'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { MiniSidebarContent } from './MiniSidebarContent';
import { SidebarContent } from './SidebarContent';

interface DesktopSidebarProps {
  isOpen: boolean;
}

export function DesktopSidebar({ isOpen }: DesktopSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    playlists: false,
    collections: false,
    subscriptions: false,
  });

  const toggleSection = (section: 'playlists' | 'collections' | 'subscriptions') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Full desktop sidebar
  if (isOpen) {
    return (
      <aside className='flex h-[calc(100vh-3.5rem)] w-60 flex-col border-r border-youtube-card bg-youtube-black'>
        <SidebarContent
          isMobile={false}
          expandedSections={expandedSections}
          toggleSection={toggleSection}
        />
      </aside>
    );
  }

  return (
    <aside className='flex h-[calc(100vh-3.5rem)] w-16 flex-col items-center border-r border-youtube-card bg-youtube-black pt-4'>
      <ScrollArea className='flex-1 w-full'>
        <MiniSidebarContent />
      </ScrollArea>
    </aside>
  );
}
