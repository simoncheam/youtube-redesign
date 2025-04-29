import type { BaseVideo } from "../types"

export interface ShortVideoData extends BaseVideo {
  channel: string
  channelId: string
  channelAvatar?: string
  subscribers?: string
}

const orangeCatVideo = {
  title: "Put this cat in jail",
  thumbnail: "/images/shorts/orange-cat-jail-thumbnail.webp",
  channel: "DailyDoseOfInternet",
  channelId: "channel18",
  channelAvatar: "/images/channels/daily-dose-avatar.png",
  subscribers: "50K",
  views: "10M views",
  timestamp: "3 weeks ago",
};

const grayCatVideo = {
  title: "Pizza Crust Really wants Milk",
  thumbnail: "/images/shorts/gray-cat-milk-thumbnail.webp",
  channel: "DailyDoseOfInternetCats",
  channelId: "channel19",
  channelAvatar: "/images/channels/daily-dose-cats-avatar.png",
  subscribers: "45K",
  views: "10M views",
  timestamp: "3 weeks ago",
};

export const shortVideos: ShortVideoData[] = [
  { id: "short1", ...orangeCatVideo },
  { id: "short2", ...grayCatVideo },
  { id: "short3", ...orangeCatVideo },
  { id: "short4", ...grayCatVideo },
  { id: "short5", ...orangeCatVideo },
  { id: "short6", ...grayCatVideo },
  { id: "short7", ...orangeCatVideo },
  { id: "short8", ...grayCatVideo },
  { id: "short9", ...orangeCatVideo },
  { id: "short10", ...grayCatVideo },
  { id: "short11", ...orangeCatVideo },
  { id: "short12", ...grayCatVideo },
];

const orangeCatDetails = {
  fullVideo: "/images/shorts/orange-cat-jail-vertical.webp",
  likes: "600K",
  dislikes: "35",
  comments: "2,765",
  shares: "52K",
};

const grayCatDetails = {
  fullVideo: "/images/shorts/gray-cat-milk-vertical.webp",
  likes: "450K",
  dislikes: "28",
  comments: "1,982",
  shares: "41K",
};

export const shortDetails = {
  short1: orangeCatDetails,
  short2: grayCatDetails,
  short3: orangeCatDetails,
  short4: grayCatDetails,
  short5: orangeCatDetails,
  short6: grayCatDetails,
  short7: orangeCatDetails,
  short8: grayCatDetails,
  short9: orangeCatDetails,
  short10: grayCatDetails,
  short11: orangeCatDetails,
  short12: grayCatDetails,
};
