# Mock Data Structure

This directory contains structured mock data for the YouTube redesign project. The data is organized to simulate a real API and provide consistent data access across components.

## Directory Structure

- `types.ts` - Shared TypeScript interfaces and types
- `channels.ts` - Central repository for all channel information
- `/home`
  - `videos.ts` - Main video content for the home page
  - `missed-videos.ts` - Videos in the "You might have missed" section
  - `suggested-videos.ts` - Suggested videos section
- `/explore`
  - `trending.ts` - Trending videos for the explore page
  - `music.ts` - Music videos section
  - `gaming.ts` - Gaming videos section
- `comments.ts` - Video comments and replies
- `categories.ts` - Content categories and filter options
- `lib/constants.ts` - Contains PATHS constants for consistent file paths

## Key Concepts

### Centralized Channel Data

All channel information is stored in `channels.ts` and referenced by ID across video files:

```typescript
// In channels.ts
export const channels = [
  {
    id: 'juxtopposed',
    name: 'Juxtopposed',
    avatar: `${PATHS.IMAGES.CHANNELS}/juxtopposed-avatar.png`,
    verified: true,
    subscribers: '304K',
  },
  // more channels...
];

// Helper function to find channels
export function findChannelById(id: string) {
  return channels.find((channel) => channel.id === id);
}

// In video files
import { findChannelById } from '../channels';

const video = {
  // ...
  channel: findChannelById('juxtopposed')!,
  // ...
};
```

### Path Constants

All image paths use the PATHS constant for consistency:

```typescript
import { PATHS } from '@/lib/constants';

const video = {
  thumbnail: `${PATHS.IMAGES.HOME}/video-thumbnail.png`,
  // ...
};
```

### Section-Specific Components

Different sections (Trending, Music, Gaming) have specialized components that handle their unique display requirements:

- `TrendingSection` - Displays trending videos with channel avatars
- `CategorySection` - Used for Music and Gaming sections (no channel avatars)

## Usage Examples

### Importing Data

```typescript
// Import specific data
import { trendingVideos } from '@/data/explore/trending';
import { findChannelById } from '@/data/channels';

// Access a specific channel
const channel = findChannelById('juxtopposed');
```

### Component Integration

```typescript
import TrendingSection from '@/components/sections/trending-section';
import { trendingVideos } from '@/data/explore/trending';

export default function ExplorePage() {
  return (
    <TrendingSection videos={trendingVideos} />
  );
}
```

## Data Model Relationships

- Videos reference channels using `findChannelById` to maintain DRY principles
- Each section (Home, Trending, Music, Gaming) has consistent video structure with section-specific fields
- All thumbnails and images follow consistent path patterns using PATHS constants

## Best Practices

1. **Single Source of Truth**: Always use `channels.ts` for channel information
2. **Consistent Paths**: Use PATHS constants for all file references
3. **Type Safety**: All data should follow the defined TypeScript interfaces
4. **Fallback Handling**: Components should handle potential missing data gracefully
5. **Conditional Rendering**: Different sections can hide/show elements (like channel avatars) based on section requirements

This structure allows for easy maintenance, consistent data across the application, and simplified component development during the interview project.
