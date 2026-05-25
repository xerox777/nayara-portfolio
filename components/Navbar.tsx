'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-lg tracking-[0.2em] uppercase transition-colors duration-300 ${
            scrolled ? 'text-charcoal' : 'text-white'
          }`}
        >
          NAV
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-charcoal' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'text-charcoal' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[10px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm px-6 pb-6 pt-2 border-t border-warm-border/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-4 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors border-b border-warm-border/40 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
