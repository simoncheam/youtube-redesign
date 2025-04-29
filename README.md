```markdown
# YouTube Redesign - Next.js Implementation

A YouTube UI redesign built with Next.js, Tailwind CSS, and shadcn/ui components. This project implements the UI from a Figma design concept with a focus on responsive design for both desktop and mobile.

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- shadcn/ui Components
- Lucide Icons

## Project Structure

### Pages & Routes

```
/app
├── layout.tsx                # Root layout with navigation
├── page.tsx                  # Home page
├── explore/                  # Explore page
│   └── page.tsx
├── shorts/                   # Shorts section
│   └── page.tsx
├── tv-mode/                  # TV mode view
│   └── page.tsx
└── watch/                    # Video watch page
    └── [videoId]/
        └── page.tsx
```

### Key Components

```/components
├── layouts/                  # Layout components

│   └── sidebar/              # Sidebar components
├── notifications/            # Notification components
├── sections/                 # Content section components
│   ├── category-section.tsx  # Reusable category sections
│   └── trending-section.tsx  # Trending videos section
├── ui/                       # shadcn/ui components
├── video-player/             # Video player components
└── shared/                   # Shared UI elements
```

### Data Organization

```
/data
├── channels.ts               # Channel information
├── types.ts                  # Shared TypeScript interfaces
├── home/                     # Home page data
│   ├── missed-videos.ts      # Videos you might have missed
│   └── suggested-videos.ts   # Suggested videos
└── explore/                  # Explore page data
    ├── gaming.ts             # Gaming content
    ├── music.ts              # Music content
    └── trending.ts           # Trending videos
```

## Features

- Mobile-first responsive design
- Dark theme UI
- Video thumbnails and information display
- Channel information and avatars
- Navigation with sidebar (desktop) and bottom bar (mobile)
- Content organized by categories
- Video player with basic controls

## Design Implementation

This project closely follows the Figma design with attention to:

- Spacing and layout
- Typography
- Color scheme
- Component design
- Responsive behavior
- Interactive elements

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Implementation Notes

- This is a frontend-only implementation with static data
- No actual video playback functionality
- All styling uses Tailwind CSS utility classes
- Components are reusable and follow consistent patterns
```


