export const SITE_CONFIG = {
  name: 'テックパパのソウルノート',
  nameKo: 'Tech Papa의 서울 노트',
  description: '日本文化が好きな韓国人パパが、AI・ガジェット・文化・言語学習について発信するブログ',
  descriptionKo: '일본 문화를 좋아하는 한국인 아빠가, AI・가젯・문화・언어 학습에 대해 발신하는 블로그',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://techpapa-blog.vercel.app',
  author: {
    name: 'Tech Papa',
    bio: '日本文化が大好きな韓国人エンジニアパパ。AI活用、ガジェットレビュー、両国文化比較を中心に発信中。',
    bioKo: '일본 문화를 좋아하는 한국인 엔지니어 아빠. AI 활용, 가젯 리뷰, 한일 문화 비교를 중심으로 발신 중.',
    image: '/images/profile.jpg',
  },
  postsPerPage: 9,
}

export const NAV_LINKS = [
  { href: '/', label: 'ホーム', labelKo: '홈' },
  { href: '/category/ai', label: 'AI活用', labelKo: 'AI 활용' },
  { href: '/category/gadget', label: 'ガジェット', labelKo: '가젯' },
  { href: '/category/korea-culture', label: '韓国文化', labelKo: '한국 문화' },
  { href: '/category/daily', label: '日常', labelKo: '일상' },
  { href: '/about', label: 'About', labelKo: 'About' },
]
