import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { PostPreview } from '@/lib/posts'
import { getCategoryBySlug } from '@/lib/categories'
import CategoryTag from './CategoryTag'

interface PostCardProps {
  post: PostPreview
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter } = post
  const category = getCategoryBySlug(frontmatter.category)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/posts/${slug}`} className="block">
        <div className="relative h-48 bg-gray-100">
          {frontmatter.thumbnail ? (
            <Image
              src={frontmatter.thumbnail}
              alt={frontmatter.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-4xl">📝</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          {category && (
            <Link href={`/category/${category.slug}`}>
              <CategoryTag category={category} size="sm" />
            </Link>
          )}
          <time className="flex items-center text-xs text-text-secondary">
            <Calendar className="w-3 h-3 mr-1" />
            {formatDate(frontmatter.date)}
          </time>
        </div>

        <Link href={`/posts/${slug}`}>
          <h2 className="font-bold text-lg text-text-primary hover:text-primary transition-colors line-clamp-2 mb-2">
            {frontmatter.title}
          </h2>
        </Link>

        <p className="text-sm text-text-secondary line-clamp-2">
          {frontmatter.description}
        </p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-text-secondary bg-gray-100 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
