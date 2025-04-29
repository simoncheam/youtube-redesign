import Image from 'next/image';
import { User } from 'lucide-react';
import { Button } from '../../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../../ui/avatar';

interface UserProfileProps {
  className?: string;
  avatarSrc?: string;
  fallback?: string;
}

export function UserProfile({
  className = '',
  avatarSrc = '/images/users/juxtopposed-transparent.png',
  fallback = 'U',
}: UserProfileProps) {
  if (avatarSrc) {
    return (
      <img
        src={avatarSrc}
        alt='profile_image'
        className='w-6 h-6 rounded-full object-cover'
        width={24}
        height={24}
      />
    );
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className={`text-white ${className}`}>
      <Avatar className='h-8 w-8 rounded-full'>
        <AvatarImage
          src={avatarSrc}
          alt='User profile'
        />
        <AvatarFallback>
          <User className='h-5 w-5' />
        </AvatarFallback>
      </Avatar>
    </Button>
  );
}
