export interface Category {
  id: string
  name: string
  icon?: string // Optional icon identifier
}

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

export const categories: Category[] = categoryNames.map((name, index) => ({
  id: `category-${index + 1}`,
  name,
}))

export const exploreTabs = ["Now", "Music", "Gaming", "Movies", "Shorts"]
