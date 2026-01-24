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
      <h1 className="text-3xl font-bold text-text-primary mb-8">記事を検索</h1>

      <div className="mb-8">
        <SearchBar />
      </div>

      {query ? (
        <>
          <div className="mb-6">
            <p className="text-text-secondary">
              「<span className="font-medium text-text-primary">{query}</span>」の検索結果：
              <span className="font-medium text-primary ml-1">{results.length}件</span>
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
                「{query}」に一致する記事が見つかりませんでした。
              </p>
              <p className="text-sm text-text-secondary mt-2">
                別のキーワードでお試しください。
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="space-y-6">
          <p className="text-text-secondary">
            キーワードを入力して記事を検索してください。
          </p>

          {initialPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">最近の記事</h2>
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
