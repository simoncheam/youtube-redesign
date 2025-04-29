import type { User } from '@/data/types';
import { PATHS } from '@/lib/constants';

export interface ChannelData extends User {
  banner?: string
  description?: string
  joinDate?: string
  totalViews?: string
  location?: string
  links?: {
    title: string
    url: string
  }[]
}

export const channels: ChannelData[] = [
  {
    id: "brawl-stars",
    name: "Brawl Stars",
    avatar: `${PATHS.IMAGES.CHANNELS}/brawl-stars.png`,
    verified: true,
    subscribers: "11M"
  },
  {
    id: "coldplay",
    name: "Coldplay",
    avatar: `${PATHS.IMAGES.CHANNELS}/coldplay.png`,
    verified: true,
    subscribers: "1.5M"
  },
  {
    id: "rose",
    name: "ROSÉ",
    avatar: `${PATHS.IMAGES.CHANNELS}/rose.png`,
    verified: true,
    subscribers: "21M"
  },
  {
    id: "clix",
    name: "Clix",
    avatar: `${PATHS.IMAGES.CHANNELS}/clix.png`,
    verified: true,
    subscribers: "199K"
  },
  {
    id: "redlettermedia",
    name: "RedLetterMedia",
    avatar: `${PATHS.IMAGES.CHANNELS}/red-letter-media.png`,
    verified: true,
    subscribers: "451K"
  },
  {
    id: "ethan-chlebowski",
    name: "Ethan Chlebowski",
    avatar: `${PATHS.IMAGES.CHANNELS}/ethan.png`,
    verified: true,
    subscribers: "324K"
  },
  {
    id: "vice-grip-garage",
    name: "Vice Grip Garage",
    avatar: `${PATHS.IMAGES.CHANNELS}/vice-grip-garage.png`,
    verified: true,
    subscribers: "812K"
  },
  {
    id: "ryan-trahan",
    name: "Ryan Trahan",
    avatar: `${PATHS.IMAGES.CHANNELS}/ryan.png`,
    verified: true,
    subscribers: "1M"
  },
  {
    id: "juxtopposed",
    name: "Juxtopposed",
    avatar: `${PATHS.IMAGES.CHANNELS}/juxtopposed-transparent.png`,
    verified: true,
    subscribers: "240K"
  },
  {
    id: "lofi-girl",
    name: "Lofi Girl",
    avatar: `${PATHS.IMAGES.CHANNELS}/lofi-girl.png`,
    verified: true,
    subscribers: "12M"
  },
  {
    id: "beluga",
    name: "Beluga",
    avatar: `${PATHS.IMAGES.CHANNELS}/beluga.png`,
    verified: true,
    subscribers: "6M"
  },
  {
    id: "musicos",
    name: "musicos Cinicos",
    avatar: `${PATHS.IMAGES.CHANNELS}/musicos.png`,
    verified: true,
    subscribers: "120K"
  },
  {
    id: "ok",
    name: "OK",
    avatar: `${PATHS.IMAGES.CHANNELS}/ok.png`,
    verified: true,
    subscribers: "3M"
  },
  {
    id: "raul-blanco",
    name: "Raul Blanco",
    avatar: `${PATHS.IMAGES.CHANNELS}/raul-b.png`,
    verified: true,
    subscribers: "7.9M"
  },
  {
    id: "tech-altar",
    name: "TechAltar",
    avatar: `${PATHS.IMAGES.CHANNELS}/tech-altar.png`,
    verified: true,
    subscribers: "2.9M"
  },
  {
    id: "wvw",
    name: "WVW",
    avatar: `${PATHS.IMAGES.CHANNELS}/wvw.png`,
    verified: true,
    subscribers: "4M"
  },
  {
    id: "zoom-art",
    name: "The Zoom Art studio",
    avatar: `${PATHS.IMAGES.CHANNELS}/zoom-art.png`,
    verified: true,
    subscribers: "3.9M"
  }
]

// Helper to find a channel by ID (simple array find)
export const findChannelById = (id: string): ChannelData | undefined => {
  return channels.find(channel => channel.id === id);
};
