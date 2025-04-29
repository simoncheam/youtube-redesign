import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FeaturedVideo() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <Link href="/watch?v=featured">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/mountain-vista.png"
            alt="Featured Video"
            width={1280}
            height={720}
            className="object-cover transition-transform hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 md:p-6">
            <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
              Discover the Hidden Wonders of Nature
            </h1>
            <div className="mt-2 flex items-center">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src="/wildlife-gathering.png" alt="Channel" />
                <AvatarFallback>NC</AvatarFallback>
              </Avatar>
              <span className="text-sm text-white/90">Nature Channel</span>
              <span className="mx-2 text-white/70">•</span>
              <span className="text-sm text-white/70">2.4M views</span>
              <span className="mx-2 text-white/70">•</span>
              <span className="text-sm text-white/70">2 days ago</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
