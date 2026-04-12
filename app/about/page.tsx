import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${SITE_CONFIG.author.name} - ${SITE_CONFIG.description}`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-8">About</h1>

      <div className="bg-surface rounded-lg p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100">
              <img
                src={SITE_CONFIG.author.image}
                alt={SITE_CONFIG.author.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-grow text-center md:text-left">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              {SITE_CONFIG.author.name}
            </h2>
            <p className="text-primary font-medium mb-4">
              {SITE_CONFIG.name}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {SITE_CONFIG.author.bio}
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              About This Blog
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Tech Papa Seoul Notes is a tech and culture blog run by a Korean engineer dad based in Seoul.
              I cover a wide range of topics including AI productivity tools, gadget reviews,
              Korean culture insights, and personal development projects.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              What You'll Find Here
            </h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>AI & Tech</strong> - Hands-on guides for ChatGPT, Claude, image generation AI, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Gadgets</strong> - Reviews of smartphones, tablets, wearables, and other devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Korean Culture</strong> - Discover Korean traditions, food, lifestyle, and travel tips</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Daily Life</strong> - Stories from everyday life and parenting in Seoul</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Dev Journal</strong> - Notes from personal development projects and experiments</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
