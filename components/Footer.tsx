export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-white/80 tracking-[0.15em]">
          Nayara Ayres-Vieira
        </p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans">
          Interior Design Studio
        </p>
        <p className="text-xs text-white/25 font-sans">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}
