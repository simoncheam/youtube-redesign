import { PATHS } from "@/lib/constants"
import { findChannelById } from "./channels"
import type { BaseVideo, User, VideoMetadata } from "./types"

// Interface (single source of truth)
export interface VideoData extends BaseVideo {
  channel: User
  metadata?: VideoMetadata
  description?: string
  likes?: string
  dislikes?: string
  category?: string
  postedAt?: string
}

// Helper functions
export const getChannel = (channelId: string): User => {
  const channel = findChannelById(channelId)
  return channel || {
    id: "default-channel",
    name: "YouTube Channel",
    avatar: `${PATHS.IMAGES.CHANNELS}/juxtopposed-transparent.png`,
    verified: false,
    subscribers: "100K",
  }
}

// All videos (core repository)
export const videos: VideoData[] = [
  {
    id: "video1",
    title: "10 Amazing Places You Must Visit in 2023",
    thumbnail: `${PATHS.IMAGES.HOME}/global-adventure-collage.png`,
    channel: {
      id: "channel1",
      name: "Travel Guide",
      avatar: `${PATHS.IMAGES.CHANNELS}/world-explorer.png`,
      verified: true,
      subscribers: "2.4M",
    },
    views: "1.2M views",
    timestamp: "3 weeks ago",
    metadata: {
      duration: "14:32",
      isWatched: false,
    },
    category: "Travel",
    postedAt: "2023-03-15T14:30:00Z",
  },
  {
    id: "video2",
    title: "How to Make Perfect Pasta Every Time",
    thumbnail: `${PATHS.IMAGES.HOME}/boiling-pasta-pot.png`,
    channel: {
      id: "channel2",
      name: "Cooking Master",
      avatar: `${PATHS.IMAGES.CHANNELS}/diverse-culinary-artist.png`,
      verified: true,
    },
    views: "856K views",
    timestamp: "5 days ago",
    metadata: {
      duration: "8:45",
      isWatched: false,
    },
    category: "Cooking",
    postedAt: "2023-11-20T09:15:00Z",
  },
  {
    id: "video3",
    title: "Learn React in 30 Minutes",
    thumbnail: `${PATHS.IMAGES.HOME}/code-compilation.png`,
    channel: {
      id: "channel3",
      name: "Code Academy",
      avatar: `${PATHS.IMAGES.CHANNELS}/focused-coder.png`,
      verified: true,
    },
    views: "1.5M views",
    timestamp: "2 months ago",
    metadata: {
      duration: "32:10",
      isWatched: true,
      progress: 75,
    },
    category: "Programming",
    postedAt: "2023-10-05T16:45:00Z",
  },
  {
    id: "video4",
    title: "The History of Ancient Egypt",
    thumbnail: `${PATHS.IMAGES.HOME}/giza-plateau-sunset.png`,
    channel: {
      id: "channel4",
      name: "History Channel",
      avatar: `${PATHS.IMAGES.CHANNELS}/ancient-civilizations-collage.png`,
      verified: true,
      subscribers: "3.2M",
    },
    views: "3.7M views",
    timestamp: "1 year ago",
    metadata: {
      duration: "45:22",
      isWatched: false,
    },
    category: "History",
    postedAt: "2022-11-30T10:00:00Z",
  },
  {
    id: "video5",
    title: "Top 10 Smartphones of 2023",
    thumbnail: `${PATHS.IMAGES.HOME}/smartphone-review-2023.png`,
    channel: {
      id: "channel5",
      name: "Tech Reviews",
      avatar: `${PATHS.IMAGES.CHANNELS}/modern-tech-workspace.png`,
      verified: true,
      subscribers: "1.8M",
    },
    views: "2.1M views",
    timestamp: "2 weeks ago",
    metadata: {
      duration: "18:45",
      isNew: true,
    },
    category: "Technology",
    postedAt: "2023-11-10T08:20:00Z",
  },
  {
    id: "video6",
    title: "Morning Yoga Routine for Beginners",
    thumbnail: `${PATHS.IMAGES.HOME}/morning-yoga-routine.png`,
    channel: {
      id: "channel6",
      name: "Yoga With Sarah",
      avatar: "/placeholder.svg?height=40&width=40&query=yoga+channel",
      verified: false,
      subscribers: "950K",
    },
    views: "4.5M views",
    timestamp: "8 months ago",
    metadata: {
      duration: "22:15",
      isWatched: false,
    },
    category: "Fitness",
    postedAt: "2023-04-25T07:30:00Z",
  },
  {
    id: "video7",
    title: "How to Build a Gaming PC in 2023",
    thumbnail: `${PATHS.IMAGES.HOME}/gaming-pc-build.png`,
    channel: {
      id: "channel7",
      name: "PC Builder",
      avatar: "/placeholder.svg?height=40&width=40&query=pc+builder+channel",
      verified: true,
      subscribers: "2.7M",
    },
    views: "3.2M views",
    timestamp: "1 month ago",
    metadata: {
      duration: "27:32",
      isWatched: false,
    },
    category: "Technology",
    postedAt: "2023-10-12T14:45:00Z",
  },
  {
    id: "video8",
    title: "The Science Behind Climate Change",
    thumbnail: `${PATHS.IMAGES.HOME}/climate-science-explained.png`,
    channel: getChannel("channel8"),
    views: "1.8M views",
    timestamp: "4 months ago",
    metadata: {
      duration: "35:48",
      isWatched: true,
      progress: 30,
    },
    category: "Science",
    postedAt: "2023-07-18T11:00:00Z",
  },
  {
    id: "youtube-redesign",
    title: "I Redesigned the ENTIRE YouTube UI from Scratch",
    thumbnail: `${PATHS.IMAGES.HOME}/youtube-ui-redesign-complete.png`,
    channel: getChannel("juxtopposed"),
    views: "50K views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
    category: "Design",
    postedAt: "2023-12-01T08:00:00Z",
  },
  {
    id: "christmas-lofi",
    title: "christmas lofi radio ✧ cozy beats to get festive to",
    thumbnail: `${PATHS.IMAGES.HOME}/christmas-lofi-cozy-scene.png`,
    channel: getChannel("lofi-girl"),
    views: "120K views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
    category: "Music",
    postedAt: "2023-12-01T10:30:00Z",
  },
  {
    id: "cat-works",
    title: "How a cat works",
    thumbnail: `${PATHS.IMAGES.HOME}/cat-xray-mechanics.png`,
    channel: getChannel("wvw"),
    views: "4M views",
    timestamp: "11 months ago",
    metadata: {
      duration: "12:07",
    },
    category: "Education",
    postedAt: "2023-01-15T14:00:00Z",
  },
  {
    id: "dvd-screensaver",
    title: "Bouncing DVD Logo Screensaver 4K 60fps - 10 hours NO LOOP",
    thumbnail: `${PATHS.IMAGES.HOME}/bouncing-dvd-logo.png`,
    channel: getChannel("raul-blanco"),
    views: "7.8M views",
    timestamp: "5 years ago",
    metadata: {
      duration: "12:07",
    },
    category: "Entertainment",
    postedAt: "2018-11-25T16:45:00Z",
  },
  {
    id: "display-race",
    title: "The billion dollar race for the perfect display",
    thumbnail: `${PATHS.IMAGES.HOME}/display-technology-comparison.png`,
    channel: getChannel("tech-altar"),
    views: "2.9M views",
    timestamp: "11 months ago",
    metadata: {
      duration: "12:07",
    },
    category: "Technology",
    postedAt: "2023-01-10T09:30:00Z",
  },
  {
    id: "face-reveals",
    title: "\"Face Reveals\" be like...",
    thumbnail: `${PATHS.IMAGES.HOME}/face-reveals-comparison.png`,
    channel: getChannel("beluga"),
    views: "6M views",
    timestamp: "2 years ago",
    metadata: {
      duration: "12:07",
    },
    category: "Entertainment",
    postedAt: "2021-12-05T18:20:00Z",
  },
]

// Combined array for global access
export const allVideos = [...videos]