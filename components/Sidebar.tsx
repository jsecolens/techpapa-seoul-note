import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { getAllCategories } from '@/lib/categories'
import { getPopularPosts } from '@/lib/posts'
import CategoryTag from './CategoryTag'

export default function Sidebar() {
  const categories = getAllCategories()
  const popularPosts = getPopularPosts(5)

  return (
    <aside className="space-y-8">
      <div className="bg-surface rounded-lg p-6 shadow-sm">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
            <img
              src={SITE_CONFIG.author.image}
              alt={SITE_CONFIG.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-lg text-text-primary">
            {SITE_CONFIG.author.name}
          </h3>
          <p className="text-sm text-text-secondary mt-2">
            {SITE_CONFIG.author.bio}
          </p>
          <Link
            href="/about"
            className="inline-block mt-3 text-primary hover:underline text-sm"
          >
            詳しく見る →
          </Link>
        </div>
      </div>

      <div className="bg-surface rounded-lg p-6 shadow-sm">
        <h3 className="font-bold text-lg text-text-primary mb-4">カテゴリー</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <CategoryTag category={category} />
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-surface rounded-lg p-6 shadow-sm">
        <h3 className="font-bold text-lg text-text-primary mb-4">人気の記事</h3>
        <ul className="space-y-3">
          {popularPosts.map((post, index) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="flex items-start space-x-3 group"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-sm text-text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  {post.frontmatter.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
