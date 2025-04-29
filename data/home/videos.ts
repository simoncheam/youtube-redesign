import type { BaseVideo, User, VideoMetadata } from "../types"
import { findChannelById } from '../channels'
import { PATHS } from "@/lib/constants"
import { VIDEO_CONTENT } from '@/data/content'
import { videos } from "../videos"

// Import unified VideoData interface
import type { VideoData } from '../types'

// Additional properties for home VideoData
export interface HomeVideoData extends VideoData {
  postedAt?: string
}



// Mock data specifically for the mobile home page
// Using findChannelById to link channels
export const mobileHomeVideos: HomeVideoData[] = [
  {
    id: 'youtube-redesign',
    title: VIDEO_CONTENT.COMMON_TITLES.REDESIGN,
    thumbnail: `${PATHS.IMAGES.HOME}/youtube-ui-redesign-complete.png`,
    channel: findChannelById('juxtopposed')!,
    views: '120K',
    timestamp: '1 day ago',
    metadata: {
      duration: '12:07'
    },
    postedAt: '2023-12-01T08:00:00Z',
    category: VIDEO_CONTENT.CATEGORIES.DESIGN,
  },
  {
    id: 'video2',
    title: 'Everything Everywhere All At Once - Responsive Design',
    thumbnail: `${PATHS.IMAGES.HOME}/everything-everywhere-responsive-design.png`,
    channel: findChannelById('juxtopposed') || {
      id: "design-channel",
      name: "Design Channel",
      avatar: `${PATHS.IMAGES.CHANNELS}/juxtopposed-transparent.png`,
      verified: true,
    },
    views: '45K',
    timestamp: '3 days ago',
    metadata: {
      duration: '8:22'
    },
    postedAt: '2023-11-28T14:30:00Z',
    category: VIDEO_CONTENT.CATEGORIES.DESIGN,
  },
  {
    id: 'video3',
    title: 'Discord Redesign - A Fresh New Look',
    thumbnail: `${PATHS.IMAGES.HOME}/discoordinated-discord-redesign.png`,
    channel: findChannelById('ui-masters')!,
    views: '87K',
    timestamp: '1 week ago',
    metadata: {
      duration: '15:30'
    },
    postedAt: '2023-11-24T16:15:00Z',
    category: VIDEO_CONTENT.CATEGORIES.DESIGN,
  },
]



// Home-specific curated video collections
export const videoGridData = [
  videos.find(v => v.id === "youtube-redesign"),
  videos.find(v => v.id === "christmas-lofi"),
  videos.find(v => v.id === "cat-works"),
  videos.find(v => v.id === "dvd-screensaver"),
  videos.find(v => v.id === "display-race"),
  videos.find(v => v.id === "face-reveals")
].filter(Boolean) as HomeVideoData[];

// Home-specific collections for featured section
export const featuredVideos = []

// Maintain backward compatibility
export { allVideos as homeVideos } from "../videos"


