'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Recommendation() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <section id="recommendation" className="py-24 md:py-36 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="tracking-[0.4em] uppercase text-xs mb-5 font-sans" style={{ color: 'rgb(255 145 86)' }}>
              Recognition
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Letter of Recommendation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Pull quote side */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-gold text-7xl leading-none mb-4 select-none">&ldquo;</span>
              <blockquote className="font-serif text-2xl md:text-3xl text-charcoal leading-snug mb-8">
                She will be an asset to the firm that hires her next.
              </blockquote>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                Nayara demonstrated a positive attitude, an eagerness to learn, and was very
                coachable during her time at Jones Architecture & Development. She organized
                the research and materials library with little to no supervision, and learned
                to create electronic editions of project Mood Boards.
              </p>
              <div className="flex items-start gap-4 pt-8 border-t border-warm-border">
                <div>
                  <p className="font-serif text-charcoal text-base">Monica Binsfed &amp; Ross A. Jones, AIA</p>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted mt-1">
                    Director of Design &amp; Principal — Jones Architecture &amp; Development
                  </p>
                  <p className="font-sans text-xs text-muted/70 mt-1">Petaluma, California · August 2025</p>
                </div>
              </div>
            </div>

            {/* Letter image side */}
            <div className="flex flex-col items-center gap-6">
              <div
                className="relative w-full max-w-sm cursor-pointer group shadow-xl"
                onClick={() => setLightboxOpen(true)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/lor.jpeg"
                    alt="Letter of Recommendation from Jones Architecture & Development"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-charcoal text-xs tracking-[0.2em] uppercase px-5 py-3 font-sans">
                    View Full Letter
                  </span>
                </div>
              </div>
              <button
                onClick={() => setLightboxOpen(true)}
                className="text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors font-sans underline underline-offset-4"
              >
                View Full Letter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/lor.jpeg"
                alt="Letter of Recommendation"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase font-sans transition-colors"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
