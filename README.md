# テックパパのソウルノート

Tech Papa의 서울 노트 - A bilingual (Japanese/Korean) tech and culture blog built with Next.js 14.

## Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Markdown Blog** - Write posts in Markdown with frontmatter
- **SEO Optimized** - Dynamic sitemap, meta tags, Open Graph
- **Responsive Design** - Mobile-first approach
- **Bilingual Support** - Japanese and Korean content

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- gray-matter (frontmatter parsing)
- react-markdown (Markdown rendering)
- remark-gfm (GitHub Flavored Markdown)
- rehype-highlight (Code syntax highlighting)
- rehype-slug (Heading anchors for TOC)
- lucide-react (Icons)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tech-papa-blog.git
cd tech-papa-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog.

### Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

## Writing Posts

Create a new Markdown file in `content/posts/`:

```markdown
---
title: "Your Post Title"
titleKo: "한국어 제목 (Optional)"
date: "2024-01-20"
category: "ai"
description: "Brief description of your post"
descriptionKo: "한국어 설명 (Optional)"
tags: ["tag1", "tag2"]
thumbnail: "/images/your-image.jpg"
---

Your content here...
```

### Available Categories

| Slug | Japanese | Korean |
|------|----------|--------|
| ai | AI活用 | AI 활용 |
| gadget | ガジェット | 가젯 |
| culture | 韓日文化 | 한일 문화 |
| japanese | 日本語学習 | 일본어 학습 |
| dev | 開発日記 | 개발 일기 |

## Project Structure

```
project07/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── posts/[slug]/       # Post detail pages
│   ├── category/[category]/ # Category pages
│   ├── about/              # About page
│   ├── search/             # Search page
│   └── sitemap.ts          # Dynamic sitemap
├── components/             # React components
├── lib/                    # Utility functions
├── content/posts/          # Markdown blog posts
└── public/                 # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy automatically

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  primary: '#4A90A4',
  background: '#FAF8F5',
  surface: '#FFFFFF',
  'text-primary': '#2D2D2D',
  'text-secondary': '#6B6B6B',
  accent: '#8B7355',
}
```

### Site Information

Update `lib/constants.ts` to change site name, author info, and navigation links.

## License

MIT License

## Author

Tech Papa - [Twitter](https://twitter.com/techpapa) | [GitHub](https://github.com/techpapa)
