export interface User {
  id: string
  name: string
  avatar: string
  verified?: boolean
  subscribers?: string
  image?: string
  hasNew?: boolean
  shortName?: string
}

export interface BaseVideo {
  id: string
  title: string
  thumbnail?: string
  views: string
  timestamp: string
  duration?: string
  likes?: string
  dislikes?: string
}

export interface RelatedVideo {
  id: string
  title: string
  thumbnail?: string
  channel: string
  channelId: string
  views: string
  timestamp: string
}

export interface VideoMetadata {
  duration?: string
  quality?: string
  isLive?: boolean
  isNew?: boolean
  isWatched?: boolean
  progress?: number
}

export interface VideoData extends BaseVideo {
  channel: User
  metadata?: VideoMetadata
  description?: string
  category?: string
}
