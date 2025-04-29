import type { User } from "./types"

export interface CommentData {
  id: string
  user: User
  content: string
  likes: number
  timestamp: string
  replies?: CommentData[]
}

export const comments: CommentData[] = [
  {
    id: "comment1",
    user: {
      id: "user1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40&query=person+1",
    },
    content:
      "This is one of the best nature documentaries I've ever seen! The cinematography is absolutely breathtaking and the narration is so engaging. Can't wait for more content like this!",
    likes: 243,
    timestamp: "2 days ago",
    replies: [
      {
        id: "reply1",
        user: {
          id: "user4",
          name: "Emma Wilson",
          avatar: "/placeholder.svg?height=40&width=40&query=person+4",
        },
        content: "I completely agree! The underwater scenes were incredible.",
        likes: 32,
        timestamp: "1 day ago",
      },
    ],
  },
  {
    id: "comment2",
    user: {
      id: "user2",
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=40&width=40&query=person+2",
    },
    content:
      "I've been to some of these locations and the video really captures their beauty. The segment on the rainforest was particularly well done. Great work!",
    likes: 128,
    timestamp: "1 day ago",
  },
  {
    id: "comment3",
    user: {
      id: "user3",
      name: "David Chen",
      avatar: "/placeholder.svg?height=40&width=40&query=person+3",
    },
    content:
      "The information about conservation efforts was really eye-opening. It's important that we protect these natural wonders for future generations.",
    likes: 87,
    timestamp: "12 hours ago",
  },
]
