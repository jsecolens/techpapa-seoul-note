import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-text-primary text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <Link href="/" className="text-lg font-bold text-white hover:text-primary transition-colors">
            {SITE_CONFIG.name}
          </Link>
          <p className="text-sm mt-1">{SITE_CONFIG.nameKo}</p>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-sm">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            プライバシーポリシー
          </Link>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.author.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
