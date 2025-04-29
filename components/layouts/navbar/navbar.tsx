'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Mic, Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Logo } from '../../common/Logo';
import { CreateButton } from './buttons/CreateButton';
import { MenuButton } from './buttons/MenuButton';
import { SettingsButton } from './buttons/SettingsButton';
import { UserProfile } from './UserProfile';
import { SearchInput } from '../../search/SearchInput';
import NotificationsDropdown from '@/components/notifications/notifications-dropdown';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isNotificationsOpen &&
        notificationsBtnRef.current &&
        !notificationsBtnRef.current.contains(event.target as Node)
      ) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationsOpen]);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleSearch = (term: string) => {
    if (term.trim()) {
      router.push(`/search?q=${encodeURIComponent(term)}`);
      setSearchTerm('');
      setIsSearchExpanded(false);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-youtube-border bg-youtube-black'>
      <div className='flex h-14 items-center px-4'>
        <div className={`flex items-center flex-shrink-0 ${isSearchExpanded ? 'hidden md:flex' : 'flex'}`}>
          <MenuButton
            onClick={onMenuClick}
            className='mr-2'
          />
          <Logo isSearchExpanded={isSearchExpanded} />
        </div>

        <div className='hidden md:flex flex-1 items-center justify-center px-4'>
          <SearchInput
            onSearch={handleSearch}
            showMicButton={true}
            className='max-w-md w-full'
          />
        </div>

        <div className='flex items-center ml-auto gap-1 md:gap-2'>
          <CreateButton className='hidden md:flex' />
          <div className='relative'>
            <Button
              ref={notificationsBtnRef}
              variant='ghost'
              size='icon'
              className='text-white'
              onClick={toggleNotifications}>
              <Bell className='h-5 w-5' />
              <span className='sr-only'>Notifications</span>
              <span className='absolute top-1 right-1 w-2 h-2 bg-youtube-red rounded-full'></span>
            </Button>
            <NotificationsDropdown
              isOpen={isNotificationsOpen}
              onClose={() => setIsNotificationsOpen(false)}
            />
          </div>
          <SettingsButton className='hidden md:flex' />
          <UserProfile />
        </div>
      </div>

      {isSearchExpanded && (
        <div className='md:hidden flex items-center px-4 pb-3 border-b border-youtube-border'>
          <div className='relative flex-1'>
            <SearchInput
              className='w-full'
              showMicButton={true}
              onSearch={handleSearch}
            />
          </div>
        </div>
      )}
    </header>
  );
}
