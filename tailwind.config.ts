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
        // Primary surfaces
        cream: '#F5F1EC',        // off-white — page background
        'soft-beige': '#D8CEC5', // soft-beige — secondary surfaces
        // Accent / brand
        gold: '#A85D35',         // terracotta — primary accent (replaces gold)
        'gold-dark': '#7A4A33',  // warm-brown — darker accent
        // Text
        charcoal: '#6F6C52',     // dark-olive — headings / dark text
        muted: '#8B8967',        // sage-green — body / muted text
        // Borders / dividers
        'warm-border': '#D8CEC5',
        // Extras available as utilities
        'sage': '#8B8967',
        'olive': '#A2A07D',
        'terracotta': '#A85D35',
        'burnt-orange': '#B66A3F',
        'dark-olive': '#6F6C52',
        'warm-brown': '#7A4A33',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
