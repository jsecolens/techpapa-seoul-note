import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/lib/posts'
import { getCategoryBySlug, getAllCategories } from '@/lib/categories'
import PostList from '@/components/PostList'
import Sidebar from '@/components/Sidebar'

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((cat) => ({ category: cat.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return { title: 'カテゴリーが見つかりません' }
  }

  return {
    title: `${category.nameJa} | カテゴリー`,
    description: category.description,
    openGraph: {
      title: `${category.nameJa} - 記事一覧`,
      description: category.description,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(categorySlug)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className={`inline-block px-4 py-2 rounded-full ${category.color} mb-4`}>
          {category.nameJa} / {category.nameKo}
        </div>
        <h1 className="text-3xl font-bold text-text-primary">
          {category.nameJa}の記事一覧
        </h1>
        <p className="text-text-secondary mt-2">{category.description}</p>
        <p className="text-sm text-text-secondary mt-1">
          {posts.length}件の記事
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow lg:w-2/3">
          <PostList posts={posts} />
        </div>
        <div className="lg:w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
