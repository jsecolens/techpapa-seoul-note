'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import type { PostPreview } from '@/lib/posts'
import SearchBar from '@/components/SearchBar'
import PostCard from '@/components/PostCard'

interface SearchContentProps {
  initialPosts: PostPreview[]
}

function searchPostsClient(posts: PostPreview[], query: string): PostPreview[] {
  const lowerQuery = query.toLowerCase()

  return posts.filter((post) => {
    const { title, description, tags } = post.frontmatter
    const searchableText = [
      title,
      description,
      ...(tags || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return searchableText.includes(lowerQuery)
  })
}

export default function SearchContent({ initialPosts }: SearchContentProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<PostPreview[]>([])

  useEffect(() => {
    if (query) {
      const searchResults = searchPostsClient(initialPosts, query)
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [query, initialPosts])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-8">Search</h1>

      <div className="mb-8">
        <SearchBar />
      </div>

      {query ? (
        <>
          <div className="mb-6">
            <p className="text-text-secondary">
              Results for "<span className="font-medium text-text-primary">{query}</span>":
              <span className="font-medium text-primary ml-1">{results.length} {results.length === 1 ? 'post' : 'posts'}</span>
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-surface rounded-lg">
              <p className="text-text-secondary">
                No posts found for "{query}".
              </p>
              <p className="text-sm text-text-secondary mt-2">
                Try a different keyword.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="space-y-6">
          <p className="text-text-secondary">
            Enter a keyword to search posts.
          </p>

          {initialPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initialPosts.slice(0, 4).map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
