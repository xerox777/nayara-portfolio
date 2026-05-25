'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax image layer — taller than viewport so it has room to drift */}
      <div
        className="absolute inset-x-0 w-full"
        style={{
          top: '-15%',
          height: '130%',
          transform: `translateY(${offsetY * 0.35}px)`,
          willChange: 'transform',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80"
          alt="Luxury interior"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay drifts slightly faster than the image for a subtle depth effect */}
      <div
        className="absolute inset-0 bg-charcoal/50"
        style={{
          transform: `translateY(${offsetY * 0.15}px)`,
          willChange: 'transform',
        }}
      />

      {/* Content stays fixed relative to the section */}
      <div
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        style={{
          transform: `translateY(${offsetY * 0.08}px)`,
          willChange: 'transform',
        }}
      >
        <p className="tracking-[0.4em] uppercase text-xs mb-6 font-sans" style={{ color: 'rgb(255 145 86)' }}>
          Interior Design Studio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[90px] font-normal mb-6 leading-[1.1]">
          Nayara<br />Ayres Vieira
        </h1>
        <p className="text-white/75 text-base md:text-lg font-light max-w-lg mx-auto mb-12 leading-relaxed font-sans">
          Crafting refined, timeless interiors that reflect the art of living beautifully.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-block border border-white/70 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-block bg-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold-dark transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator fades out as you scroll */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50"
        style={{ opacity: Math.max(0, 1 - offsetY / 300) }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans"></span>
        <div className="w-px h-14 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
