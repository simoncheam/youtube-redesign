import { findChannelById } from "../channels";
import { PATHS } from "@/lib/constants";
import type { BaseVideo, User, VideoMetadata } from "../types";

export interface MissedVideoData extends BaseVideo {
  channel: User
  metadata?: VideoMetadata
  description?: string
}

export const missedVideos: MissedVideoData[] = [
  {
    id: "responsive-design",
    title: "How Websites Learned to Fit Everywhere",
    thumbnail: `${PATHS.IMAGES.HOME}/everything-everywhere-responsive-design.png`,
    channel: findChannelById("juxtopposed")!,
    views: "150K views",
    timestamp: "4 months ago",
    metadata: {
      duration: "12:07",
    },
    description: "A deep dive into responsive web design and how websites adapt to different screen sizes.",
  },
  {
    id: "discord-redesign",
    title: "I Redesigned Discord UI just to make it Cozier",
    thumbnail: `${PATHS.IMAGES.HOME}/discoordinated-discord-redesign.png`,
    channel: findChannelById("juxtopposed")!,
    views: "432K views",
    timestamp: "1 month ago",
    metadata: {
      duration: "12:07",
    },
    description: "Reimagining Discord's user interface with a focus on comfort and usability.",
  },
  {
    id: "color-theory",
    title: "everything about color (literally)",
    thumbnail: `${PATHS.IMAGES.HOME}/literally-everything-about-color.png`,
    channel: findChannelById("juxtopposed")!,
    views: "315K views",
    timestamp: "3 months ago",
    metadata: {
      duration: "12:07",
    },
    description: "An extensive exploration of color theory, psychology, and application in design.",
  },
  {
    id: "blur-techniques",
    title: "I tried blurring things in 5 ways",
    thumbnail: `${PATHS.IMAGES.HOME}/i-heart-blur-techniques.png`,
    channel: findChannelById("juxtopposed")!,
    views: "304K views",
    timestamp: "8 months ago",
    metadata: {
      duration: "12:07",
    },
    description: "Experimenting with different blur techniques and their applications in UI design.",
  },
  // TODO: Add more videos for scrolling
]