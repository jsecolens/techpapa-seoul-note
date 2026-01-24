import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: `${SITE_CONFIG.author.name}について - ${SITE_CONFIG.description}`,
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
            <p className="text-text-secondary leading-relaxed mb-4">
              {SITE_CONFIG.author.bio}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {SITE_CONFIG.author.bioKo}
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              このブログについて
            </h3>
            <p className="text-text-secondary leading-relaxed">
              「テックパパのソウルノート」は、日本文化が大好きな韓国人エンジニアパパが運営する技術・文化ブログです。
              AI活用術、最新ガジェットのレビュー、韓日両国の文化比較、日本語学習のコツなど、
              多彩なテーマで情報を発信しています。
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              이 블로그에 대하여
            </h3>
            <p className="text-text-secondary leading-relaxed">
              「테크파파의 서울 노트」는 일본 문화를 좋아하는 한국인 엔지니어 아빠가 운영하는 기술・문화 블로그입니다.
              AI 활용법, 최신 가젯 리뷰, 한일 양국의 문화 비교, 일본어 학습 팁 등
              다양한 주제로 정보를 발신하고 있습니다.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              主なコンテンツ
            </h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>AI活用</strong> - ChatGPT、Claude、画像生成AIなどの実践的な使い方</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>ガジェット</strong> - スマートフォン、タブレット、ウェアラブルデバイスのレビュー</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>韓日文化</strong> - 両国の生活習慣、食文化、社会の違いと共通点</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>日本語学習</strong> - 外国人向けの日本語学習リソースとコツ</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>開発日記</strong> - 個人開発プロジェクトの記録</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              お問い合わせ
            </h3>
            <p className="text-text-secondary leading-relaxed">
              ご質問やご意見がございましたら、ブログのコメント欄からお気軽にご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
