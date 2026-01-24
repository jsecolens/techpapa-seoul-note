import { getAllPosts } from '@/lib/posts'
import PostList from '@/components/PostList'
import Sidebar from '@/components/Sidebar'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow lg:w-2/3">
          <h1 className="text-3xl font-bold text-text-primary mb-8">
            最新の記事
          </h1>
          <PostList posts={posts} />
        </div>
        <div className="lg:w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
