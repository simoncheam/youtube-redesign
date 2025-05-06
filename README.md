# YouTube Redesign - Next.js Implementation

A modern YouTube UI redesign built with Next.js, Tailwind CSS, and shadcn/ui components. This project implements the UI from a Figma design concept with a focus on responsive design for both desktop and mobile views.

[![Product Screenshot][product-screenshot]](https://youtube-redesign-3fph.vercel.app/)

## Live Demo

Explore the app live: [YouTube Redesign](https://youtube-redesign-3fph.vercel.app/)

Watch a video walkthrough of the application:
[YouTube Redesign Demo](https://www.loom.com/share/6a9cda64cc2744ccad8ce0f66209c34f?sid=6bbf0aee-547e-4bb1-8abd-03c7cea936cd)

<a id="readme-top"></a>

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design Implementation](#design-implementation)
- [Contact](#contact)

---

## About The Project

This implementation is based on the design concept available at:
[YouTube Redesign Figma Community File](https://www.figma.com/community/file/1450380484645543336)

The project focuses on creating a modern, responsive YouTube interface with improved aesthetics and user experience.

---

## Features

- Mobile-first responsive design adapting to different screen sizes
- Dark theme UI consistent with the design
- Displays video thumbnails, titles, channel info, and metadata
- Core navigation handled by the sidebar (desktop) and bottom bar (mobile)
- Content sections organized by category (Trending, Music, Gaming)
- Basic video player UI structure
- Shorts display with responsive layout

---

## Technologies Used

- [![Next.js][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![shadcn/ui][Shadcn]][Shadcn-url]

---

## Project Structure

### App Structure

```
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

---

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design Implementation

This project aims for a high-fidelity implementation of the Figma design, focusing on:

- Accurate spacing, layout, and typography.
- Correct color scheme application.
- Consistent component styling.
- Responsive adjustments for different viewports.
- Basic interactive elements like hover states.

### Implementation Notes

- Frontend only; uses static mock data, no real API calls.
- No actual video playback is implemented.
- Built primarily with Tailwind CSS utilities and shadcn/ui components.
- Components are designed to be reusable where possible.

---

## Contact

Simon Cheam - [LinkedIn][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: /public/images/youtube-redesign-thumbnail.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Shadcn]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white
[Shadcn-url]: https://ui.shadcn.com/
[linkedin-url]: https://www.linkedin.com/in/simoncheam/

```


```
