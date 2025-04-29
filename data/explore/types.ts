// data/explore/types.ts

// Shared types used across multiple data files

// Common user/channel type
export interface User {
  id: string
  name: string
  avatar: string
  verified?: boolean
  subscribers?: string
}

// Base video type with common properties
export interface BaseVideo {
  id: string
  title: string
  thumbnail: string
  views: string
  timestamp: string
}

// Video metadata for consistent formatting
export interface VideoMetadata {
  duration?: string
  quality?: string
  isLive?: boolean
  isNew?: boolean
  isWatched?: boolean
  progress?: number // 0-100 percentage watched
}
