'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PostPreview } from '@/lib/posts'
import PostCard from './PostCard'
import { SITE_CONFIG } from '@/lib/constants'

interface PostListProps {
  posts: PostPreview[]
  title?: string
}

export default function PostList({ posts, title }: PostListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = SITE_CONFIG.postsPerPage
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold text-text-primary mb-6">{title}</h2>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-12 bg-surface rounded-lg">
          <p className="text-text-secondary">記事がありません</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="flex items-center justify-center space-x-2 mt-8">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="前のページ"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="次のページ"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  )
}
