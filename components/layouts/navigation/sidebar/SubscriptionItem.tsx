'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DemoLink } from '@/components/layouts/shared/DemoLink';

interface SubscriptionItemProps {
  label: string;
  href: string;
  avatar?: string;
  onClick?: () => void;
  className?: string;
  isImplemented?: boolean;
}

/**
 * SubscriptionItem component for sidebar navigation
 *
 * This component represents a YouTube channel subscription item
 * with the channel's avatar and name.
 */
export function SubscriptionItem({
  label,
  href,
  avatar,
  onClick,
  className,
  isImplemented = true,
}: SubscriptionItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Common button styling
  const buttonClass = cn(
    'w-full justify-start gap-3 rounded-lg px-3 py-1.5 text-sm',
    isActive && 'bg-youtube-card font-medium',
    !isImplemented && 'opacity-60',
    className
  );

  // Common content
  const content = (
    <>
      <Avatar className='h-5 w-5 mr-2'>
        <AvatarImage
          src={avatar || '/images/placeholder-avatar.png'}
          alt={label}
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-avatar.png';
          }}
        />
        <AvatarFallback>{label[0]}</AvatarFallback>
      </Avatar>
      <span>{label}</span>
    </>
  );
  // demo link
  if (!isImplemented) {
    return (
      <DemoLink
        href={href}
        message={`Channel ${label} is not available in this demo`}
        className={buttonClass}>
        {content}
      </DemoLink>
    );
  }

  return (
    <Button
      asChild
      variant='ghost'
      className={buttonClass}
      onClick={isImplemented ? onClick : undefined}>
      <Link href={isImplemented ? href : '#'}>{content}</Link>
    </Button>
  );
}
