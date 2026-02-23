import { Suspense } from 'react'
import { getAllPosts } from '@/lib/posts'
import SearchContent from './SearchContent'

import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: '記事を検索',
  description: 'ブログ記事を検索',
  alternates: {
    canonical: `${SITE_CONFIG.url}/search`,
  },
}

export default function SearchPage() {
  const allPosts = getAllPosts()

  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">記事を検索</h1>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    }>
      <SearchContent initialPosts={allPosts} />
    </Suspense>
  )
}
