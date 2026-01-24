import { Category } from '@/lib/categories'

interface CategoryTagProps {
  category: Category
  size?: 'sm' | 'md'
}

export default function CategoryTag({ category, size = 'md' }: CategoryTagProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
  }

  return (
    <span
      className={`inline-block rounded-full font-medium ${category.color} ${sizeClasses[size]} transition-opacity hover:opacity-80`}
    >
      {category.nameJa}
    </span>
  )
}
