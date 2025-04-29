'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, Tv, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ShortsIcon } from '@/components/common/icons/ShortsIcon';

interface MobileBottomNavProps {
  onSearchClick: () => void;
}

export function MobileBottomNav({ onSearchClick }: MobileBottomNavProps) {
  const pathname = usePathname();
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Include search in the navigation items array with a special type property
  const navItems = [
    { name: 'Home', href: '/', icon: Home, position: 1, type: 'link' },
    { name: 'Shorts', href: '/shorts', icon: ShortsIcon, position: 2, type: 'link' },
    {
      name: 'Search',
      href: '/search',
      icon: Search,
      position: 3,
      type: 'button',
      onClick: () => {
        setIsSearchActive(!isSearchActive);
        onSearchClick();
      },
    },
    { name: 'Subs', href: '/subscriptions', icon: Users, position: 4, type: 'link' },
    { name: 'Library', href: '/library', icon: Library, position: 5, type: 'link' },
  ];

  // Sort items by position
  const orderedItems = [...navItems].sort((a, b) => a.position - b.position);

  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-background border-t border-border h-16 z-50'>
      <div className='grid grid-cols-5 h-full'>
        {orderedItems.map((item, index) => {
          const isActive = item.type === 'button' && item.name === 'Search' ? isSearchActive : pathname === item.href;
          // Choose icon based on active state
          const IconComponent = isActive ? item.icon : item.icon;

          // Common styling for both links and buttons
          const className = cn(
            'flex flex-col items-center justify-center gap-1',
            isActive ? 'text-youtube-red font-medium' : 'text-gray-400',
            'hover:text-white transition-colors'
          );

          // Render button or link based on type
          return item.type === 'button' ? (
            <button
              key={`nav-item-${index}`}
              onClick={item.onClick}
              className={className}>
              <IconComponent
                className={cn(
                  'h-5 w-5',
                  isActive ? 'text-youtube-red fill-youtube-red stroke-[1.5]' : 'text-gray-400 stroke-[1.5]'
                )}
              />
              <span className='text-xs'>{item.name}</span>
            </button>
          ) : (
            <Link
              key={`nav-item-${index}`}
              href={item.href}
              className={className}>
              <IconComponent
                className={cn(
                  'h-5 w-5',
                  isActive ? 'text-youtube-red fill-youtube-red stroke-[1.5]' : 'text-gray-400 stroke-[1.5]'
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
