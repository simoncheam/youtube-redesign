import { libraryLinks, mainLinks } from '@/data/navigation';
import { FolderKanban, ListVideo, Users } from 'lucide-react';
import { MiniSidebarItem } from './MiniSidebarItem';

export function MiniSidebarContent() {
  return (
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
  );
}
