'use client';

import { CastButton } from '@/components/layouts/navigation/navbar/buttons/CastButton';
import { MenuButton } from '@/components/layouts/navigation/navbar/buttons/MenuButton';
import { NotificationsButton } from '@/components/layouts/navigation/navbar/buttons/NotificationsButton';
import { UserProfile } from '@/components/layouts/navigation/navbar/UserProfile';
import { Logo } from '../../../common/Logo';

interface MobileNavbarProps {
  onMenuClick: () => void;
}

export function MobileNavbar({ onMenuClick }: MobileNavbarProps) {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-youtube-black border-b border-youtube-border'>
      <div className='flex items-center justify-between px-4 h-14'>
        <div className='flex items-center gap-2'>
          <MenuButton
            onClick={onMenuClick}
            className='h-8 w-8'
          />
          <Logo />
        </div>

        <div className='flex items-center gap-2'>
          <CastButton className='h-8 w-8' />
          <NotificationsButton />
          <UserProfile className='h-8 w-8' />
        </div>
      </div>
    </header>
  );
}
