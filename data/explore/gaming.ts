import type { BaseVideo, User, VideoMetadata } from "../types"

export interface GamingVideoData extends BaseVideo {
  channel: User
  metadata?: VideoMetadata
}

export const gamingVideos: GamingVideoData[] = [
  {
    id: "gaming1",
    title: "Cyberpunk 2077: Ultimate Edition – City of Dreams",
    thumbnail: "/images/gaming/cyberpunk-2077-ultimate.png",
    channel: {
      id: "channel26",
      name: "Cyberpunk 2077",
      avatar: "/channels/neon-cityscape-logo.png",
      verified: true,
    },
    views: "1.9M views",
    timestamp: "10 days ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "gaming2",
    title: "So... We're Not Getting A Sims 5, Ever.",
    thumbnail: "/images/gaming/sims-5-cancelled.png",
    channel: {
      id: "channel27",
      name: "lilsimsie",
      avatar: "/lilsimsie-inspired-sim.png",
      verified: false,
    },
    views: "500K views",
    timestamp: "8 days ago",
  },
  {
    id: "gaming3",
    title: "Ananta - Official Gameplay Trailer (Formerly Project Mugen)",
    thumbnail: "/images/gaming/ananta-gameplay-trailer.png",
    channel: {
      id: "channel28",
      name: "IGN",
      avatar: "/stylized-ign.png",
      verified: true,
    },
    views: "671K views",
    timestamp: "2 days ago",
  },
  {
    id: "gaming4",
    title: "Booting up Detroit Become Human After a year and I get this...",
    thumbnail: "/images/gaming/detroit-become-human.png",
    channel: {
      id: "channel29",
      name: "ETourist",
      avatar: "/vibrant-gaming-setup.png",
      verified: false,
    },
    views: "2.5M views",
    timestamp: "1 year ago",
  },
]
