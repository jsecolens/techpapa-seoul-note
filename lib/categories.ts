export interface Category {
  slug: string
  name: string
  description: string
  color: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'ai',
    name: 'AI & Tech',
    description: 'Practical tips on using ChatGPT, Claude, Gemini, and other generative AI tools',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    slug: 'gadget',
    name: 'Gadgets',
    description: 'Reviews and tips for the latest gadgets and devices',
    color: 'bg-green-100 text-green-800',
  },
  {
    slug: 'korea-culture',
    name: 'Korean Culture',
    description: 'Discover the beauty and uniqueness of Korean culture',
    color: 'bg-rose-100 text-rose-800',
  },
  {
    slug: 'dev',
    name: 'Dev Journal',
    description: 'Notes and learnings from personal development projects',
    color: 'bg-pink-100 text-pink-800',
  },
  {
    slug: 'daily',
    name: 'Daily Life',
    description: 'Stories from daily life and parenting in Seoul',
    color: 'bg-amber-100 text-amber-800',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug)
}

export function getAllCategories(): Category[] {
  return CATEGORIES
}
