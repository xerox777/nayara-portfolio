'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-charcoal">
      <h2 className="font-serif text-3xl mb-4">Something went wrong</h2>
      <button
        onClick={reset}
        className="text-sm tracking-widest uppercase border border-charcoal px-6 py-3 hover:bg-charcoal hover:text-white transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
