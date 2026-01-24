'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/search"
              className="p-2 text-text-secondary hover:text-primary transition-colors"
              aria-label="検索"
            >
              <Search className="w-5 h-5" />
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/search"
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-5 h-5" />
                <span>検索</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
