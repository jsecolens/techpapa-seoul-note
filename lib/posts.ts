import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  titleKo?: string
  date: string
  category: string
  description: string
  descriptionKo?: string
  thumbnail?: string
  tags?: string[]
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export interface PostPreview {
  slug: string
  frontmatter: PostFrontmatter
}

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

export function getAllPosts(): PostPreview[] {
  ensurePostsDirectory()

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        frontmatter: data as PostFrontmatter,
      }
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  ensurePostsDirectory()

  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  }
}

export function getPostsByCategory(category: string): PostPreview[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.frontmatter.category === category)
}

export function searchPosts(query: string): PostPreview[] {
  const allPosts = getAllPosts()
  const lowerQuery = query.toLowerCase()

  return allPosts.filter((post) => {
    const { title, titleKo, description, descriptionKo, tags } = post.frontmatter
    const searchableText = [
      title,
      titleKo,
      description,
      descriptionKo,
      ...(tags || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return searchableText.includes(lowerQuery)
  })
}

export function getAllPostSlugs(): string[] {
  ensurePostsDirectory()

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export function getAdjacentPosts(currentSlug: string): {
  prev: PostPreview | null
  next: PostPreview | null
} {
  const posts = getAllPosts()
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug)

  return {
    prev: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    next: currentIndex > 0 ? posts[currentIndex - 1] : null,
  }
}

export function getPopularPosts(limit: number = 5): PostPreview[] {
  const posts = getAllPosts()
  return posts.slice(0, limit)
}
