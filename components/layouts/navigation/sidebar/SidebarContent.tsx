import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { libraryLinks, mainLinks, playlists, collections, subscriptions } from '@/data/navigation';
import type { ReactNode } from 'react';
import { SidebarItem } from './SidebarItem';
import { ExpandableSection } from './SidebarSection';
import { SubscriptionItem } from './SubscriptionItem';

import { ListVideo, FolderKanban, Users } from 'lucide-react';
interface SidebarContentProps {
  isMobile?: boolean;
  onItemClick?: () => void;
  onClose?: () => void;
  expandedSections: {
    playlists: boolean;
    collections: boolean;
    subscriptions: boolean;
  };
  toggleSection: (section: 'playlists' | 'collections' | 'subscriptions') => void;
  header?: ReactNode;
}

export function SidebarContent({
  isMobile = false,
  onClose,
  onItemClick,
  expandedSections,
  toggleSection,
  header,
}: SidebarContentProps) {
  // Create a handler that only applies onItemClick to navigation items, not section toggles
  const handleItemClick = () => {
    if (onItemClick) onItemClick();
  };

  return (
    <ScrollArea className='flex-1 py-4'>
      {/* Only include header if explicitly provided, don't generate one */}
      {header}

      <div className='px-3 py-2'>
        {/* Pass handleItemClick to regular nav items */}
        <div className='space-y-1'>
          {mainLinks.map((link) => (
            <SidebarItem
              key={link.href}
              icon={link.icon}
              label={link.label}
              href={link.href}
              onClick={handleItemClick} // Close sidebar when clicking regular links
              isImplemented={link.isImplemented ?? true}
            />
          ))}
        </div>
      </div>

      <Separator className='my-2 bg-youtube-card' />

      <div className='px-3 py-2'>
        <div className='space-y-1'>
          {libraryLinks.map((link) => (
            <SidebarItem
              key={link.href}
              icon={link.icon}
              label={link.label}
              href={link.href}
              onClick={handleItemClick}
              isImplemented={link.isImplemented ?? true}
            />
          ))}
        </div>
      </div>

      {/* Expandable sections - DON'T pass onClick to these */}
      <div className='px-3 py-2'>
        <ExpandableSection
          title='Playlists'
          icon={<ListVideo className='h-5 w-5' />}
          isExpanded={expandedSections.playlists}
          onToggle={() => toggleSection('playlists')}>
          {playlists.map((playlist) => (
            <SidebarItem
              key={playlist.href}
              label={playlist.label}
              href={playlist.href}
              onClick={handleItemClick} // Close sidebar when clicking items INSIDE the section
              isCompact
              isImplemented={playlist.isImplemented ?? true}
            />
          ))}
        </ExpandableSection>

        <ExpandableSection
          title='Collections'
          icon={<FolderKanban className='h-5 w-5' />}
          isExpanded={expandedSections.collections}
          onToggle={() => toggleSection('collections')}>
          {collections.map((collection) => (
            <SidebarItem
              key={collection.href}
              label={collection.label}
              href={collection.href}
              onClick={handleItemClick}
              isCompact
              isImplemented={collection.isImplemented ?? true}
            />
          ))}
        </ExpandableSection>

        <ExpandableSection
          title='Subscriptions'
          icon={<Users className='h-5 w-5' />}
          isExpanded={expandedSections.subscriptions}
          onToggle={() => toggleSection('subscriptions')}>
          {subscriptions.map((subscription) => (
            <SubscriptionItem
              key={subscription.href}
              label={subscription.label}
              href={subscription.href}
              avatar={subscription.avatar}
              onClick={handleItemClick}
              isImplemented={subscription.isImplemented ?? true}
            />
          ))}
        </ExpandableSection>
      </div>
    </ScrollArea>
  );
}
