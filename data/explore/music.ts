import type { BaseVideo, User } from "../types"

export interface MusicVideoData extends BaseVideo {
  channel: User
  metadata?: {
    duration: string
  }
}

export const musicVideos: MusicVideoData[] = [
  {
    id: "music1",
    title: "Jorja Smith - Loving You (feat. Maverick Sabre)",
    thumbnail: "/images/music/jorja-smith-music-video.png",
    channel: {
      id: "channel22",
      name: "Jorja Smith",
      avatar: "/channels/contemplative-artist.png",
      verified: true,
    },
    views: "226K views",
    timestamp: "6 days ago",
    metadata: {
      duration: "12:07",
    },
  },
  {
    id: "music2",
    title: "BAD BUNNY - EL CLUB (Video Oficial)",
    thumbnail: "/images/music/bad-bunny-el-club.png",
    channel: {
      id: "channel23",
      name: "Bad Bunny",
      avatar: "/channels/urban-music-artist.png",
      verified: true,
    },
    views: "4.1M views",
    timestamp: "1 day ago",
  },
  {
    id: "music3",
    title: "Juice WRLD - Empty Out Your Pockets (Official Fortnite Video)",
    thumbnail: "/images/music/juice-wrld-fortnite.png",
    channel: {
      id: "channel24",
      name: "Juice WRLD",
      avatar: "/channels/melodic-reflection.png",
      verified: true,
    },
    views: "11M views",
    timestamp: "7 days ago",
  },
  {
    id: "music4",
    title: "Yesterday's World (Official Music Video) - TV Girl & George Clanton",
    thumbnail: "/images/music/tv-girl-george-clanton.png",
    channel: {
      id: "channel25",
      name: "TV Girl",
      avatar: "/channels/retro-band-logo.png",
      verified: true,
    },
    views: "12K views",
    timestamp: "1 day ago",
  },
]
