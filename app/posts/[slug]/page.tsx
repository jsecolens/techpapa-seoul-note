import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug, getAllPostSlugs, getAdjacentPosts } from '@/lib/posts'
import { getCategoryBySlug } from '@/lib/categories'
import { SITE_CONFIG } from '@/lib/constants'
import TableOfContents from '@/components/TableOfContents'
import ShareButtons from '@/components/ShareButtons'
import CategoryTag from '@/components/CategoryTag'
import 'highlight.js/styles/github-dark.css'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: '記事が見つかりません' }
  }

  const { frontmatter } = post

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [SITE_CONFIG.author.name],
      images: frontmatter.thumbnail
        ? [{ url: frontmatter.thumbnail }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.thumbnail ? [frontmatter.thumbnail] : undefined,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { frontmatter, content } = post
  const category = getCategoryBySlug(frontmatter.category)
  const { prev, next } = getAdjacentPosts(slug)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          {category && (
            <Link href={`/category/${category.slug}`}>
              <CategoryTag category={category} />
            </Link>
          )}
          <time className="flex items-center text-sm text-text-secondary">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(frontmatter.date)}
          </time>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {frontmatter.title}
        </h1>

        {frontmatter.titleKo && (
          <p className="text-xl text-text-secondary mb-4">
            {frontmatter.titleKo}
          </p>
        )}

        <p className="text-lg text-text-secondary">
          {frontmatter.description}
        </p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-text-secondary bg-gray-100 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 order-2 lg:order-1">
          <div className="bg-surface rounded-lg p-6 md:p-8 shadow-sm">
            <div className="prose max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeHighlight]}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <ShareButtons title={frontmatter.title} slug={slug} />
          </div>

          <nav className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev && (
              <Link
                href={`/posts/${prev.slug}`}
                className="flex items-center p-4 bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <ArrowLeft className="w-5 h-5 mr-3 text-text-secondary group-hover:text-primary transition-colors" />
                <div>
                  <span className="text-xs text-text-secondary">前の記事</span>
                  <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                    {prev.frontmatter.title}
                  </p>
                </div>
              </Link>
            )}
            {next && (
              <Link
                href={`/posts/${next.slug}`}
                className="flex items-center justify-end p-4 bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow group md:col-start-2"
              >
                <div className="text-right">
                  <span className="text-xs text-text-secondary">次の記事</span>
                  <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                    {next.frontmatter.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 ml-3 text-text-secondary group-hover:text-primary transition-colors" />
              </Link>
            )}
          </nav>
        </div>

        <aside className="lg:w-1/4 order-1 lg:order-2">
          <div className="lg:sticky lg:top-24">
            <TableOfContents content={content} />
          </div>
        </aside>
      </div>
    </article>
  )
}
