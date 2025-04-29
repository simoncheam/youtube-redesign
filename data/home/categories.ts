export interface Category {
  id: string
  name: string
  icon?: string // Optional icon identifier
}

// Simple string array for basic category names
export const categoryNames = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Podcasts",
  "Cooking",
  "Recently uploaded",
  "New to you",
  "Watched",
  "Computer Science",
  "Comedy",
  "Action-adventure games",
  "Graphic design",
  "Animation",
  "Gadgets",
  "History",
]

// More detailed category objects with IDs for reference
export const categories: Category[] = categoryNames.map((name, index) => ({
  id: `category-${index + 1}`,
  name,
}))

// Category tabs for specific sections
export const exploreTabs = ["Now", "Music", "Gaming", "Movies", "Shorts"]
