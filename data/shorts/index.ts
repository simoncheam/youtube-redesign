import type { BaseVideo } from "../types"

export interface ShortVideoData extends BaseVideo {
  channel: string
  channelId: string
  channelAvatar?: string
  subscribers?: string
}

export const shortVideos: ShortVideoData[] = [
  {
    id: "short1",
    title: "Put this cat in jail",
    thumbnail: "/images/shorts/orange-cat-jail-thumbnail.webp",
    channel: "DailyDoseOfInternet",
    channelId: "channel18",
    channelAvatar: "/images/channels/daily-dose-avatar.png",
    subscribers: "50K",
    views: "10M views",
    timestamp: "3 weeks ago",
  },
  {
    id: "short2",
    title: "Pizza Crust Really wants Milk",
    thumbnail: "/images/shorts/gray-cat-milk-thumbnail.webp",
    channel: "DailyDoseOfInternetCats",
    channelId: "channel19",
    channelAvatar: "/images/channels/daily-dose-cats-avatar.png",
    subscribers: "45K",
    views: "10M views",
    timestamp: "3 weeks ago",
  },
  {
    id: "short3",
    title: "Put this cat in jail",
    thumbnail: "/images/shorts/orange-cat-jail-thumbnail.webp",
    channel: "DailyDoseOfInternet",
    channelId: "channel18",
    channelAvatar: "/images/channels/daily-dose-avatar.png",
    subscribers: "50K",
    views: "10M views",
    timestamp: "3 weeks ago",
  },
  {
    id: "short4",
    title: "Pizza Crust Really wants Milk",
    thumbnail: "/images/shorts/gray-cat-milk-thumbnail.webp",
    channel: "DailyDoseOfInternetCats",
    channelId: "channel19",
    channelAvatar: "/images/channels/daily-dose-cats-avatar.png",
    subscribers: "45K",
    views: "10M views",
    timestamp: "3 weeks ago",
  },
  {
    id: "short5",
    title: "Put this cat in jail",
    thumbnail: "/images/shorts/orange-cat-jail-thumbnail.webp",
    channel: "DailyDoseOfInternet",
    channelId: "channel18",
    channelAvatar: "/images/channels/daily-dose-avatar.png",
    subscribers: "50K",
    views: "10M views",
    timestamp: "3 weeks ago",
  },
  {
    id: "short6",
    title: "Pizza Crust Really wants Milk",
    thumbnail: "/images/shorts/gray-cat-milk-thumbnail.webp",
    channel: "DailyDoseOfInternetCats",
    channelId: "channel19",
    channelAvatar: "/images/channels/daily-dose-cats-avatar.png",
    subscribers: "45K",
    views: "10M views",
    timestamp: "3 weeks ago",
  },
]

// Additional data for the detailed short view
export const shortDetails = {
  short1: {
    fullVideo: "/images/shorts/orange-cat-jail-vertical.webp",
    likes: "600K",
    dislikes: "35",
    comments: "2,765",
    shares: "52K",
  },
  short2: {
    fullVideo: "/images/shorts/gray-cat-milk-vertical.webp",
    likes: "450K",
    dislikes: "28",
    comments: "1,982",
    shares: "41K",
  },
  short3: {
    fullVideo: "/images/shorts/orange-cat-jail-vertical.webp",
    likes: "600K",
    dislikes: "35",
    comments: "2,765",
    shares: "52K",
  },
  short4: {
    fullVideo: "/images/shorts/gray-cat-milk-vertical.webp",
    likes: "450K",
    dislikes: "28",
    comments: "1,982",
    shares: "41K",
  },
  short5: {
    fullVideo: "/images/shorts/orange-cat-jail-vertical.webp",
    likes: "600K",
    dislikes: "35",
    comments: "2,765",
    shares: "52K",
  },
  short6: {
    fullVideo: "/images/shorts/gray-cat-milk-vertical.webp",
    likes: "450K",
    dislikes: "28",
    comments: "1,982",
    shares: "41K",
  },
}
