import { Home, Compass, History, Clock, ThumbsUp, Tv } from 'lucide-react';
import { ShortsIcon } from '@/components/common/icons/ShortsIcon';
import { ReactNode } from 'react';
import { PATHS } from '@/lib/constants';

export interface NavigationLink {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
  isImplemented?: boolean;
}

export interface SubscriptionLink extends NavigationLink {
  avatar?: string;
}

export interface SimpleLink {
  label: string;
  href: string;
  active?: boolean;
  isImplemented?: boolean;
}

export const mainLinks: NavigationLink[] = [
  {
    icon: <Home className='h-5 w-5' />,
    label: 'Home',
    href: '/',
    isImplemented: true,
  },
  {
    icon: <Compass className='h-5 w-5' />,
    label: 'Explore',
    href: '/explore',
    isImplemented: true,
  },
  {
    icon: <ShortsIcon className='h-5 w-5' />,
    label: 'Shorts',
    href: '/shorts',
    isImplemented: true,
  },
  {
    icon: <Tv className='h-5 w-5' />,
    label: 'TV Mode',
    href: '/tv-mode',
    isImplemented: true,
  },
  {
    icon: <History className='h-5 w-5' />,
    label: 'History',
    href: '/history',
    isImplemented: false,
  },
];

export const libraryLinks: NavigationLink[] = [
  {
    icon: <Clock className='h-5 w-5' />,
    label: 'Watch Later',
    href: '/watch-later',
    isImplemented: false,
  },
  {
    icon: <ThumbsUp className='h-5 w-5' />,
    label: 'Liked Videos',
    href: '/liked-videos',
    isImplemented: false,
  },
];

export const playlists: SimpleLink[] = [
  { label: 'Cool Stuff', href: '/playlist/cool-stuff', isImplemented: false },
  { label: 'Redesigns', href: '/playlist/redesigns', isImplemented: false },
  { label: 'uhfygujkhj', href: '/playlist/uhfygujkhj', isImplemented: false },
];

export const collections: SimpleLink[] = [
  { label: 'Design', href: '/collection/design', isImplemented: false },
  { label: 'Gaming', href: '/collection/gaming', isImplemented: false },
  { label: 'Tech', href: '/collection/tech', isImplemented: false },
];

export const subscriptions: SubscriptionLink[] = [
  {
    icon: <div />,
    label: 'Lofi Girl',
    href: '/channel/lofi-girl',
    avatar: `${PATHS.IMAGES.CHANNELS}/lofi-girl.png`,
    isImplemented: false,
  },
  {
    icon: <div />,
    label: 'Ninja',
    href: '/channel/ninja',
    avatar: `${PATHS.IMAGES.CHANNELS}/ryan.png`,
    isImplemented: false,
  },
  {
    icon: <div />,
    label: 'TechAltar',
    href: '/channel/tech-altar',
    avatar: `${PATHS.IMAGES.CHANNELS}/tech-altar.png`,
    isImplemented: false,
  },
  {
    icon: <div />,
    label: 'The Human Spider',
    href: '/channel/human-spider',
    avatar: `${PATHS.IMAGES.CHANNELS}/clix.png`,
    isImplemented: false,
  },
];
