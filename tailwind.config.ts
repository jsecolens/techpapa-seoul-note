import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90A4',
        background: '#FAF8F5',
        surface: '#FFFFFF',
        'text-primary': '#2D2D2D',
        'text-secondary': '#6B6B6B',
        accent: '#8B7355',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
