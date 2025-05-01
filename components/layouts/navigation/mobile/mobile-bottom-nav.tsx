'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, Tv, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShortsIcon } from '@/components/common/icons/ShortsIcon';

interface MobileBottomNavProps {
  // onSearchClick: () => void;
}

export function MobileBottomNav({}: MobileBottomNavProps) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home, position: 1, type: 'link' },
    { name: 'Shorts', href: '/shorts', icon: ShortsIcon, position: 2, type: 'link' },
    {
      name: 'Search',
      href: '/search',
      icon: Search,
      position: 3,
      type: 'link',
    },
    { name: 'Subs', href: '/subscriptions', icon: Users, position: 4, type: 'link' },
    { name: 'Library', href: '/library', icon: Library, position: 5, type: 'link' },
  ];

  const orderedItems = [...navItems].sort((a, b) => a.position - b.position);

  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-background border-t border-border h-16 z-50'>
      <div className='grid grid-cols-5 h-full'>
        {orderedItems.map((item, index) => {
          const isActive = pathname === item.href;
          const IconComponent = item.icon;

          const className = cn(
            'flex flex-col items-center justify-center gap-1',
            isActive ? 'text-youtube-red font-medium' : 'text-gray-400',
            'hover:text-white transition-colors'
          );

          return (
            <Link
              key={`nav-item-${index}`}
              href={item.href}
              className={className}>
              <IconComponent
                className={cn(
                  'h-5 w-5',
                  isActive ? 'text-youtube-red' : 'text-gray-400',
                  item.name === 'Shorts' && isActive ? 'fill-youtube-red' : '',
                  item.name !== 'Shorts' ? 'stroke-[1.5]' : ''
                )}
              />
              <span className='text-xs'>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
