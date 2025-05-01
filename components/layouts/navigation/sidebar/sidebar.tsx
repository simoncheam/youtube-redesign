'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { collections, libraryLinks, mainLinks, playlists, subscriptions } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { FolderKanban, ListVideo, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';
import { MiniSidebarItem } from './MiniSidebarItem';
import { SidebarItem } from './SidebarItem';
import { ExpandableSection } from './SidebarSection';
import { SubscriptionItem } from './SubscriptionItem';
import { SidebarContent } from './SidebarContent';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
  isImplemented?: boolean;
}

interface ExpandableSectionProps {
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  onClick?: () => void;
}

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Sidebar({ isOpen, isMobile, onOpenChange }: SidebarProps) {
  const pathname = usePathname();

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

  // Mobile sidebar (Sheet component)
  if (isMobile) {
    return (
      <Sheet
        open={isOpen}
        onOpenChange={onOpenChange}>
        <SheetContent
          side='left'
          className='p-0 bg-youtube-black w-64 border-r border-youtube-border z-50'
          forceMount>
          <SheetHeader className='p-4 border-b border-youtube-border flex flex-row items-center justify-between'>
            <SheetTitle className='flex items-center gap-1'>
              <svg
                viewBox='0 0 90 20'
                preserveAspectRatio='xMidYMid meet'
                className='h-5 w-20 text-white'
                fill='currentColor'>
                <g>
                  <path
                    d='M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z'
                    fill='#FF0000'></path>
                  <path
                    d='M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z'
                    fill='white'></path>
                </g>
              </svg>
            </SheetTitle>
          </SheetHeader>

          {/* Use the abstracted SidebarContent instead of renderSidebarContent */}
          <SidebarContent
            isMobile={true}
            onItemClick={() => onOpenChange(false)}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        </SheetContent>
      </Sheet>
    );
  }

  // Full desktop sidebar
  if (isOpen) {
    return (
      <aside className='flex h-[calc(100vh-3.5rem)] w-60 flex-col border-r border-youtube-card bg-youtube-black'>
        {/* Use the abstracted SidebarContent */}
        <SidebarContent
          isMobile={false}
          expandedSections={expandedSections}
          toggleSection={toggleSection}
        />
      </aside>
    );
  }

  // Mini sidebar (rest of the code stays the same)
  return (
    <aside className='flex h-[calc(100vh-3.5rem)] w-16 flex-col items-center border-r border-youtube-card bg-youtube-black pt-4'>
      <ScrollArea className='flex-1 w-full'>
        <div className='space-y-1 px-2'>
          {/* Main links in mini sidebar */}
          {mainLinks.map((link) => (
            <MiniSidebarItem
              key={link.href}
              icon={link.icon}
              label={link.label}
              href={link.href}
              isImplemented={link.isImplemented ?? true}
            />
          ))}

          {/* Library links in mini sidebar */}
          {libraryLinks.map((link) => (
            <MiniSidebarItem
              key={link.href}
              icon={link.icon}
              label={link.label}
              href={link.href}
              isImplemented={link.isImplemented ?? true}
            />
          ))}

          {/* Add mini versions of expandable section headers */}
          <MiniSidebarItem
            key='playlists'
            icon={<ListVideo className='h-5 w-5' />}
            label='Playlists'
            href='/playlists'
            isImplemented={false}
          />

          <MiniSidebarItem
            key='collections'
            icon={<FolderKanban className='h-5 w-5' />}
            label='Collections'
            href='/collections'
            isImplemented={false}
          />

          <MiniSidebarItem
            key='subscriptions'
            icon={<Users className='h-5 w-5' />}
            label='Subscriptions'
            href='/subscriptions'
            isImplemented={false}
          />
        </div>
      </ScrollArea>
    </aside>
  );
}
