export interface Category {
  slug: string
  nameJa: string
  nameKo: string
  description: string
  color: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'ai',
    nameJa: 'AI活用',
    nameKo: 'AI 활용',
    description: 'ChatGPT、Claude、Geminiなど生成AIの実践的な活用方法',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    slug: 'gadget',
    nameJa: 'ガジェット',
    nameKo: '가젯',
    description: '最新ガジェットのレビューと使いこなし術',
    color: 'bg-green-100 text-green-800',
  },
  {
    slug: 'japan-culture',
    nameJa: '日本文化',
    nameKo: '일본 문화',
    description: '私が学んでいる日本文化の発見と気づき',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    slug: 'korea-culture',
    nameJa: '韓国文化',
    nameKo: '한국 문화',
    description: '日本の皆さんに紹介したい韓国の美',
    color: 'bg-rose-100 text-rose-800',
  },
  {
    slug: 'japanese',
    nameJa: '日本語学習',
    nameKo: '일본어 학습',
    description: '外国人向け日本語学習のコツとリソース',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    slug: 'dev',
    nameJa: '開発日記',
    nameKo: '개발 일기',
    description: '個人開発の記録と学び',
    color: 'bg-pink-100 text-pink-800',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug)
}

export function getAllCategories(): Category[] {
  return CATEGORIES
}
