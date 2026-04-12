export const SITE_CONFIG = {
  name: 'Tech Papa Seoul Notes',
  description: 'A Korean engineer dad sharing insights on AI, gadgets, Korean culture, and daily life in Seoul.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hitechpapa.com',
  author: {
    name: 'Tech Papa',
    bio: 'A Korean engineer and dad based in Seoul. Writing about AI tools, gadget reviews, Korean culture, and life as a tech-savvy parent.',
    image: '/images/profile.jpg',
  },
  postsPerPage: 9,
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/category/ai', label: 'AI & Tech' },
  { href: '/category/gadget', label: 'Gadgets' },
  { href: '/category/korea-culture', label: 'Korean Culture' },
  { href: '/category/dev', label: 'Dev Journal' },
  { href: '/category/daily', label: 'Daily Life' },
  { href: '/about', label: 'About' },
]
