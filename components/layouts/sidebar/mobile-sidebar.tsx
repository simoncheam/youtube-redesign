'use client';

import type React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Compass,
  Clock,
  ThumbsUp,
  History,
  Tv,
  X,
  ChevronDown,
  ChevronUp,
  ListVideo,
  FolderKanban,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShortsIcon } from '@/components/common/icons/ShortsIcon';
import { useState } from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}

function SidebarItem({ icon, label, href, onClick }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant='ghost'
      onClick={onClick}
      className={cn('w-full justify-start gap-3 rounded-lg px-3', isActive && 'bg-youtube-card font-medium')}>
      <Link href={href}>
        <span className={cn(isActive && 'active-nav-icon')}>{icon}</span>
        <span>{label}</span>
      </Link>
    </Button>
  );
}

function ExpandableSection({
  title,
  icon,
  isExpanded,
  onToggle,
  children,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className='space-y-1'>
      <Button
        variant='ghost'
        className='w-full justify-between rounded-lg px-3 py-2 text-left'
        onClick={() => onToggle()}>
        <div className='flex items-center gap-3'>
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <span>{isExpanded ? <ChevronUp className='h-4 w-4' /> : <ChevronDown className='h-4 w-4' />}</span>
      </Button>
      {isExpanded && <div className='pl-10 space-y-1'>{children}</div>}
    </div>
  );
}

function SubscriptionItem({
  label,
  href,
  avatar,
  onClick,
}: {
  label: string;
  href: string;
  avatar?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant='ghost'
      className={cn(
        'w-full justify-start gap-3 rounded-lg px-3 py-1.5 text-sm',
        isActive && 'bg-youtube-card font-medium'
      )}
      onClick={onClick}>
      <Link href={href}>
        <Avatar className='h-5 w-5 mr-2'>
          <AvatarImage
            src={avatar || '/placeholder.svg'}
            alt={label}
          />
          <AvatarFallback>{label[0]}</AvatarFallback>
        </Avatar>
        <span>{label}</span>
      </Link>
    </Button>
  );
}

interface MobileSidebarProps {
  onClose: () => void;
}

export default function MobileSidebar({ onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  // State for expandable sections
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

  const mainLinks = [
    { icon: <Home className='h-5 w-5' />, label: 'Home', href: '/', active: pathname === '/' },
    { icon: <Compass className='h-5 w-5' />, label: 'Explore', href: '/explore', active: pathname === '/explore' },
    { icon: <ShortsIcon className='h-5 w-5' />, label: 'Shorts', href: '/shorts', active: pathname === '/shorts' },
    { icon: <Tv className='h-5 w-5' />, label: 'TV Mode', href: '/tv-mode', active: pathname === '/tv-mode' },
    { icon: <History className='h-5 w-5' />, label: 'History', href: '/history', active: pathname === '/history' },
  ];

  const libraryLinks = [
    {
      icon: <Clock className='h-5 w-5' />,
      label: 'Watch Later',
      href: '/watch-later',
      active: pathname === '/watch-later',
    },
    {
      icon: <ThumbsUp className='h-5 w-5' />,
      label: 'Liked Videos',
      href: '/liked-videos',
      active: pathname === '/liked-videos',
    },
  ];

  const playlists = [
    { label: 'Cool Stuff', href: '/playlist/cool-stuff', active: pathname === '/playlist/cool-stuff' },
    { label: 'Redesigns', href: '/playlist/redesigns', active: pathname === '/playlist/redesigns' },
    { label: 'uhfygujkhj', href: '/playlist/uhfygujkhj', active: pathname === '/playlist/uhfygujkhj' },
  ];

  const collections = [
    { label: 'Design', href: '/collection/design', active: pathname === '/collection/design' },
    { label: 'Gaming', href: '/collection/gaming', active: pathname === '/collection/gaming' },
    { label: 'Tech', href: '/collection/tech', active: pathname === '/collection/tech' },
  ];

  const subscriptions = [
    {
      label: 'Lofi Girl',
      href: '/channel/lofi-girl',
      active: pathname === '/channel/lofi-girl',
      avatar: '/channels/lofi-girl-avatar.png',
    },
    {
      label: 'Ninja',
      href: '/channel/ninja',
      active: pathname === '/channel/ninja',
      avatar: '/channels/ninja-avatar.png',
    },
    {
      label: 'TechAltar',
      href: '/channel/tech-altar',
      active: pathname === '/channel/tech-altar',
      avatar: '/channels/tech-altar-avatar.png',
    },
    {
      label: 'The Human Spider',
      href: '/channel/human-spider',
      active: pathname === '/channel/human-spider',
      avatar: '/channels/human-spider-avatar.png',
    },
  ];

  return (
    <div className='flex h-full flex-col bg-youtube-black'>
      <div className='flex items-center p-4 border-b border-youtube-card'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={onClose}>
          <svg
            viewBox='0 0 90 20'
            preserveAspectRatio='xMidYMid meet'
            className='h-5 w-20 text-white'
            fill='currentColor'>
            <g>
              <path
                d='M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z'
                fill='#FF0033'></path>
              <path
                d='M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z'
                fill='white'></path>
            </g>
          </svg>
        </Link>
        <div className='ml-auto flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={onClose}
            className='text-white mr-2'>
            <X className='h-5 w-5' />
            <span className='sr-only'>Close menu</span>
          </Button>
          {/* <Avatar className='h-8 w-8'>
            <AvatarImage
              src='/vibrant-street-market.png'
              alt='User'
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
      <ScrollArea className='flex-1'>
        <div className='px-3 py-2'>
          <div className='space-y-1'>
            {mainLinks.map((link) => (
              <SidebarItem
                key={link.href}
                icon={link.icon}
                label={link.label}
                href={link.href}
                onClick={onClose}
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
                onClick={onClose}
              />
            ))}
          </div>
        </div>

        {/* Expandable sections */}
        <div className='px-3 py-2'>
          <ExpandableSection
            title='Playlists'
            icon={<ListVideo className='h-5 w-5' />}
            isExpanded={expandedSections.playlists}
            onToggle={() => toggleSection('playlists')}>
            {playlists.map((playlist) => (
              <Button
                key={playlist.href}
                asChild
                variant='ghost'
                className={cn(
                  'w-full justify-start rounded-lg py-1.5 text-sm',
                  playlist.active && 'bg-youtube-card font-medium'
                )}
                onClick={onClose}>
                <Link href={playlist.href}>
                  <span>{playlist.label}</span>
                </Link>
              </Button>
            ))}
          </ExpandableSection>

          <ExpandableSection
            title='Collections'
            icon={<FolderKanban className='h-5 w-5' />}
            isExpanded={expandedSections.collections}
            onToggle={() => toggleSection('collections')}>
            {collections.map((collection) => (
              <Button
                key={collection.href}
                asChild
                variant='ghost'
                className={cn(
                  'w-full justify-start rounded-lg py-1.5 text-sm',
                  collection.active && 'bg-youtube-card font-medium'
                )}
                onClick={onClose}>
                <Link href={collection.href}>
                  <span>{collection.label}</span>
                </Link>
              </Button>
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
                onClick={onClose}
              />
            ))}
          </ExpandableSection>
        </div>
      </ScrollArea>
    </div>
  );
}
