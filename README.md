# YouTube Redesign - Next.js Implementation

A YouTube UI redesign built with Next.js, Tailwind CSS, and shadcn/ui components. This project implements the UI from a Figma design concept with a focus on responsive design for both desktop and mobile.

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- shadcn/ui Components
- Lucide Icons

## Project Structure

### Pages & Routes

```plaintext
/app
├── layout.tsx                # Root layout (applies navigation)
├── page.tsx                  # Home page
├── explore/
│   └── page.tsx              # Explore page (Trending, Music, Gaming)
├── shorts/
│   └── page.tsx              # Shorts grid page
├── tv-mode/
│   └── page.tsx              # TV mode view
└── watch/
    └── [videoId]/
        └── page.tsx          # Video watch page
```

### Key Components

The main structure relies on components within `/components`:

```plaintext
/components
├── layouts/                  # Core layout & navigation components
│   ├── navbar.tsx            # Top navigation bar (critical)
│   └── sidebar/              # Sidebar navigation (critical)
│       └── sidebar.tsx
├── notifications/            # Notification dropdown & items
├── sections/                 # Reusable content sections for pages
│   ├── category-section.tsx  # Music/Gaming sections
│   └── trending-section.tsx  # Trending videos section
├── ui/                       # shadcn/ui components library
├── video-player/             # Video player UI components
└── shared/                   # Common UI elements (e.g., YoutubeLogo)
```

_Note: The `navbar.tsx` and `sidebar.tsx` components within `/layouts/` are essential for site navigation._

### Data Organization

Static data is organized under `/data` to simulate API responses:

```plaintext
/data
├── channels.ts               # Central channel definitions
├── types.ts                  # Shared TypeScript interfaces
├── home/                     # Data for the home page sections
│   ├── missed-videos.ts
│   └── suggested-videos.ts
└── explore/                  # Data for the explore page sections
    ├── gaming.ts
    ├── music.ts
    └── trending.ts
```

## Features

- Mobile-first responsive design adapting to different screen sizes.
- Dark theme UI consistent with the design.
- Displays video thumbnails, titles, channel info, and metadata.
- Core navigation handled by the sidebar (desktop) and potentially a bottom bar (mobile, if implemented).
- Content sections organized by category (Trending, Music, Gaming).
- Basic video player UI structure.

## Design Implementation

This project aims for a high-fidelity implementation of the Figma design, focusing on:

- Accurate spacing, layout, and typography.
- Correct color scheme application.
- Consistent component styling.
- Responsive adjustments for different viewports.
- Basic interactive elements like hover states.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Implementation Notes

- Frontend only; uses static mock data, no real API calls.
- No actual video playback is implemented.
- Built primarily with Tailwind CSS utilities and shadcn/ui components.
- Components are designed to be reusable where possible.

```


```
