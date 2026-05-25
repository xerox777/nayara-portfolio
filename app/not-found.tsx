import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-charcoal">
      <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4 font-sans">404</p>
      <h2 className="font-serif text-3xl mb-6">Page not found</h2>
      <Link
        href="/"
        className="text-sm tracking-widest uppercase border border-charcoal px-6 py-3 hover:bg-charcoal hover:text-white transition-colors"
      >
        Return home
      </Link>
    </div>
  )
}
