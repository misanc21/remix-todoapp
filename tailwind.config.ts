import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
} satisfies Config

