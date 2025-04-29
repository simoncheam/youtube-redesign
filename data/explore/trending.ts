import { findChannelById } from "../channels";
import { PATHS } from "@/lib/constants";
import type { BaseVideo, User, VideoMetadata } from "../types";

export interface TrendingVideoData extends BaseVideo {
  channel: User
  metadata?: VideoMetadata
}

export const trendingVideos: TrendingVideoData[] = [
  {
    id: "trending1",
    title: "To Brawl AND BEYOND!",
    thumbnail: `${PATHS.IMAGES.TRENDING}/brawl-stars-beyond.webp`,
    channel: findChannelById("brawl-stars")!,
    views: "11M views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "trending2",
    title: "Coldplay - ALL MY LOVE (Official Video) (Directors Cut)",
    thumbnail: `${PATHS.IMAGES.TRENDING}/coldplay-all-my-love.webp`,
    channel: findChannelById("coldplay")!,
    views: "1.5M views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "trending3",
    title: "ROSÉ - toxic till the end (official music video)",
    thumbnail: `${PATHS.IMAGES.TRENDING}/rose-toxic-music-video.webp`,
    channel: findChannelById("rose")!,
    views: "21M views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "trending4",
    title: "OG FORTNITE IS BACK!",
    thumbnail: `${PATHS.IMAGES.TRENDING}/og-fortnite-season1.webp`,
    channel: findChannelById("clix")!,
    views: "199K views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "trending5",
    title: "Galaxy Quest Review",
    thumbnail: `${PATHS.IMAGES.TRENDING}/galaxy-quest-review.webp`,
    channel: findChannelById("redlettermedia")!,
    views: "451K views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "trending6",
    title: "Is expensive Butter worth it?",
    thumbnail: `${PATHS.IMAGES.TRENDING}/expensive-butter-comparison.webp`,
    channel: findChannelById("ethan-chlebowski")!,
    views: "324K views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "trending7",
    title: "FORGOTTEN Truck In Cow Pasture With SEIZED Motor - Will It Run?",
    thumbnail: `${PATHS.IMAGES.TRENDING}/forgotten-truck-vgg.webp`,
    channel: findChannelById("vice-grip-garage")!,
    views: "812K views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "trending8",
    title: "I Tried the Top 5 Restaurants in America",
    thumbnail: `${PATHS.IMAGES.TRENDING}/top-restaurants-eat-it.webp`,
    channel: findChannelById("ryan-trahan")!,
    views: "1M views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
]
