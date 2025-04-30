'use client';

import NotificationsDropdown from '@/components/notifications/notifications-dropdown';
import { Button } from '@/components/ui/button';
import { useClickOutside } from '@/hooks/ui/useClickOutside';
import { Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Logo } from '../../common/Logo';
import { SearchInput } from '../../search/SearchInput';
import { CreateButton } from './buttons/CreateButton';
import { MenuButton } from './buttons/MenuButton';
import { SettingsButton } from './buttons/SettingsButton';
import { UserProfile } from './UserProfile';

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasShownPromo = sessionStorage.getItem('promoShown');

    if (!hasShownPromo) {
      const style2 = [
        'background: linear-gradient(#E36C4E, #19272f)',
        'border: 1px solid #E36C4E',
        'color: white',
        'padding: 1px 5px',
        'display: block',
        'line-height: 40px',
        'text-align: center',
        'font-weight: bold',
        'font-size: large',
      ].join(';');
      console.log(
        "%cIf you like what you see...I'd love to help you to take your software, team, or company to the next level.",
        style2
      );
      console.log("%cLet's chat >>> simon@simoncheam.dev", style2);

      sessionStorage.setItem('promoShown', 'true');
    }
  }, []);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  useClickOutside(dropdownRef, () => setIsNotificationsOpen(false), notificationsBtnRef);

  const toggleNotifications = () => {
    setIsNotificationsOpen((prev) => !prev);
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
              ref={dropdownRef}
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
