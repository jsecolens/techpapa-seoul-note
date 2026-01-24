'use client'

import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const matches: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2]
      const id = text
        .toLowerCase()
        .replace(/[^\w\s\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf\uac00-\ud7af-]/g, '')
        .replace(/\s+/g, '-')

      matches.push({ id, text, level })
    }

    setHeadings(matches)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="bg-surface rounded-lg p-4 shadow-sm">
      <h3 className="flex items-center font-bold text-text-primary mb-3">
        <List className="w-4 h-4 mr-2" />
        目次
      </h3>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            style={{ paddingLeft: `${(level - 2) * 12}px` }}
          >
            <a
              href={`#${id}`}
              className={`block text-sm transition-colors ${
                activeId === id
                  ? 'text-primary font-medium'
                  : 'text-text-secondary hover:text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
