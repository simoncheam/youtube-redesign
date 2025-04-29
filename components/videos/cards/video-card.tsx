import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { VideoData } from "@/data/videos"

interface VideoCardProps {
  video: VideoData
  aspectRatio?: "video" | "square"
  className?: string
}

export function VideoCard({ video, aspectRatio = "video", className }: VideoCardProps) {
  return (
    <Link href={`/watch?v=${video.id}`} className={`group ${className}`}>
      <div className="space-y-2">
        <div className={`relative ${aspectRatio === "video" ? "aspect-video" : "aspect-square"} overflow-hidden rounded-xl`}>
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            width={1280}
            height={720}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex gap-2">
          <Avatar className="h-9 w-9 rounded-full">
            <AvatarImage src={video.channel.avatar || "/placeholder.svg"} alt={video.channel.name} />
            <AvatarFallback>{video.channel.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium leading-tight group-hover:text-primary">{video.title}</h3>
            <div className="text-sm text-muted-foreground">
              <div>{video.channel.name}</div>
              <div>
                {video.views} • {video.timestamp}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}