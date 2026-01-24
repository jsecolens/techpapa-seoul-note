'use client'

import { Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const url = `${SITE_CONFIG.url}/posts/${slug}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-blue-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-600',
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error('Failed to copy URL')
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-text-secondary mr-2">シェア:</span>
      {shareLinks.map(({ name, icon: Icon, href, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full bg-gray-100 text-text-secondary ${color} hover:text-white transition-colors`}
          aria-label={`${name}でシェア`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full bg-gray-100 text-text-secondary hover:bg-gray-600 hover:text-white transition-colors"
        aria-label="リンクをコピー"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
      </button>
    </div>
  )
}
