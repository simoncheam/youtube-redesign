import { findChannelById } from "../channels";
import { PATHS } from "@/lib/constants";
import type { BaseVideo, User, VideoMetadata } from "../types";

export interface SuggestedVideoData extends BaseVideo {
  channel: User
  metadata?: VideoMetadata
  description?: string
}

export const suggestedVideos: SuggestedVideoData[] = [
  {
    id: "video-josh-hutcherson",
    title: "Josh Hutcherson Whistle",
    thumbnail: `${PATHS.IMAGES.HOME}/josh-hutcherson-whistle.png`,
    channel: findChannelById("ok") || {
      id: "ok",
      name: "ok",
      avatar: `${PATHS.IMAGES.CHANNELS}/ok.png`,
      verified: false,
    },
    views: "3M views",
    timestamp: "1 year ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "video-megalovania",
    title: "megalovania everytime with more bits",
    thumbnail: `${PATHS.IMAGES.HOME}/megalovania-bits.png`,
    channel: findChannelById("musicos") || {
      id: "musicos",
      name: "músicos Cínicos 邪",
      avatar: `${PATHS.IMAGES.CHANNELS}/musicos.png`,
      verified: false,
    },
    views: "120K views",
    timestamp: "1 day ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "video-egg",
    title: "egg",
    thumbnail: `${PATHS.IMAGES.HOME}/egg-100gb.png`,
    channel: findChannelById("beluga")!,
    views: "1.9M views",
    timestamp: "1 year ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "video-shrek-test",
    title: "The Original Shrek Test from 1995",
    thumbnail: `${PATHS.IMAGES.HOME}/shrek-test-1995.png`,
    channel: findChannelById("zoom-art") || {
      id: "zoom-art",
      name: "The Zoom Art studio",
      avatar: `${PATHS.IMAGES.CHANNELS}/zoom-art.png`,
      verified: true,
    },
    views: "3.5M views",
    timestamp: "1 year ago",
    metadata: {
      duration: "12:07",
    },
  },
]