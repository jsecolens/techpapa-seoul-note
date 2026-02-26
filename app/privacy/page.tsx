import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: `${SITE_CONFIG.name}のプライバシーポリシー`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-8">プライバシーポリシー</h1>

      <div className="bg-surface rounded-lg p-8 shadow-sm space-y-8 text-text-secondary leading-relaxed">
        <section>
          <p>
            「{SITE_CONFIG.name}」（以下、「当サイト」）は、ユーザーの個人情報の取り扱いについて、
            以下のとおりプライバシーポリシーを定めます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">個人情報の収集について</h2>
          <p>
            当サイトは静的なブログサイトであり、会員登録、お問い合わせフォーム、コメント機能等を設けておりません。
            そのため、当サイトが直接的にユーザーの個人情報を収集することはありません。
            ただし、以下に記載する第三者サービス（Google Analytics、Google AdSense）を通じて、
            匿名の利用データが自動的に収集される場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">Cookieの使用について</h2>
          <p>
            当サイトでは、ユーザーの利便性向上のためにCookieを使用しています。
            Cookieとは、ウェブサイトがお客様のコンピュータに送信する小さなテキストファイルです。
            ブラウザの設定により、Cookieの受け入れを拒否することも可能ですが、
            その場合、当サイトの一部機能が利用できなくなる場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。
            Google Analyticsはデータの収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p className="mt-2">
            この機能はCookieを無効にすることで収集を拒否することができます。
            お使いのブラウザの設定をご確認ください。
            Google Analyticsの利用規約については、
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Analytics利用規約
            </a>
            をご覧ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">広告配信について</h2>
          <p>
            当サイトでは、第三者配信の広告サービス「Google AdSense」を使用しています。
            Google AdSenseは、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            Cookieを使用することにより、ユーザーがそのサイトや他のサイトにアクセスした際の情報に基づき、
            適切な広告を表示します。
          </p>
          <p className="mt-2">
            ユーザーは、Googleの
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              広告設定ページ
            </a>
            で、パーソナライズ広告を無効にすることができます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">免責事項</h2>
          <p>
            当サイトに掲載されている情報の正確性には万全を期しておりますが、
            その内容の正確性・安全性を保証するものではありません。
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。
          </p>
          <p className="mt-2">
            また、当サイトからリンクやバナーなどによって他のサイトに移動された場合、
            移動先サイトで提供される情報やサービス等について一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">著作権について</h2>
          <p>
            当サイトで掲載している文章や画像などの著作権は、当サイト運営者に帰属します。
            無断転載は禁止いたします。引用する場合は、当サイトへのリンクを掲載してください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-3">プライバシーポリシーの変更</h2>
          <p>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、
            本ポリシーの内容を適宜見直し改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </section>

        <section className="border-t border-gray-200 pt-6 text-sm">
          <p>制定日：2026年2月26日</p>
          <p className="mt-1">{SITE_CONFIG.name} 運営者：{SITE_CONFIG.author.name}</p>
        </section>
      </div>
    </div>
  )
}
