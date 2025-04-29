// Utility functions for working with mock data

/**
 * Get a video by ID from any video collection
 */
export function getVideoById(id: string, collection: any[]) {
  return collection.find((video) => video.id === id) || null
}

/**
 * Get related videos for a specific video
 * (In a real app, this would use tags, categories, etc.)
 */
export function getRelatedVideos(videoId: string, count = 6) {
  // This is a mock function - in a real app you'd use an algorithm
  // to find related content based on tags, user history, etc.
  const { relatedVideos } = require("./related-videos")
  return relatedVideos.slice(0, count)
}

/**
 * Format view count for display
 * e.g. 1200000 -> "1.2M views"
 */
export function formatViewCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K views`
  }
  return `${count} views`
}

/**
 * Format time elapsed for display
 * e.g. "2 weeks ago"
 */
export function formatTimeElapsed(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHour = Math.floor(diffMin / 60)
  const diffDay = Math.floor(diffHour / 24)
  const diffWeek = Math.floor(diffDay / 7)
  const diffMonth = Math.floor(diffDay / 30)
  const diffYear = Math.floor(diffDay / 365)

  if (diffYear > 0) return `${diffYear} year${diffYear > 1 ? "s" : ""} ago`
  if (diffMonth > 0) return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`
  if (diffWeek > 0) return `${diffWeek} week${diffWeek > 1 ? "s" : ""} ago`
  if (diffDay > 0) return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`
  if (diffHour > 0) return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`
  if (diffMin > 0) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`
  return "Just now"
}
