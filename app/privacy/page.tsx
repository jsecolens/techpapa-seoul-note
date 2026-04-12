import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_CONFIG.name}`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-8">Privacy Policy</h1>

      <div className="bg-surface rounded-lg p-8 shadow-sm space-y-8 text-text-secondary leading-relaxed">
        <section>
          <p>
            {SITE_CONFIG.name} ("this site") defines its privacy policy regarding the handling of
            user personal information as follows.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">Collection of Personal Information</h2>
          <p>
            This site is a static blog and does not have membership registration, contact forms, or comment features.
            Therefore, this site does not directly collect personal information from users.
            However, anonymous usage data may be automatically collected through third-party services
            (Google Analytics, Google AdSense) as described below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">Analytics Tools</h2>
          <p>
            This site uses Google Analytics, an access analysis tool provided by Google.
            Google Analytics uses cookies to collect data.
            This data is collected anonymously and does not identify individuals.
          </p>
          <p className="mt-2">
            You can refuse data collection by disabling cookies in your browser settings.
            For more information, please refer to the{' '}
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Analytics Terms of Service
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">Advertising</h2>
          <p>
            This site uses Google AdSense, a third-party advertising service.
            Google AdSense may use cookies to display ads based on user interests.
            By using cookies, ads are displayed based on information from visits to this site and other sites.
          </p>
          <p className="mt-2">
            You can disable personalized ads through Google's{' '}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ad Settings page
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">Disclaimer</h2>
          <p>
            While every effort is made to ensure the accuracy of the information on this site,
            we do not guarantee its accuracy or safety.
            We are not responsible for any damages arising from the content published on this site.
          </p>
          <p className="mt-2">
            We are also not responsible for information or services provided by other sites
            accessed through links or banners on this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">Copyright</h2>
          <p>
            All text and images on this site are copyrighted by the site operator.
            Unauthorized reproduction is prohibited. If quoting, please include a link to this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">Changes to This Policy</h2>
          <p>
            This site will comply with applicable laws regarding personal information
            and will review and improve this policy as needed.
            The latest privacy policy will always be available on this page.
          </p>
        </section>

        <section className="border-t border-gray-200 pt-6 text-sm">
          <p>Effective date: February 26, 2026</p>
          <p className="mt-1">{SITE_CONFIG.name} operated by hitechpapa</p>
        </section>
      </div>
    </div>
  )
}
