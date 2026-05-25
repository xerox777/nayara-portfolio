'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const featured = [
  { title: 'Boho Lounge & Living', category: 'Residential', image: '/projects/p11_img1.jpeg', className: 'lg:col-span-2' },
  { title: 'Navy Kitchen & Dining', category: 'Kitchen & Bath', image: '/projects/p3_img1.jpeg', className: '' },
  { title: 'Spa Bathroom — Arched Vanity', category: 'Kitchen & Bath', image: '/projects/p4_img3.jpeg', className: '' },
  { title: 'Classic Bathroom — Clawfoot Tub', category: 'Kitchen & Bath', image: '/projects/p13_img2.jpeg', className: '' },
  { title: 'Master Bedroom Suite', category: 'Residential', image: '/projects/p12_img1.jpeg', className: 'lg:col-span-2' },
  { title: 'Living Room — Fireplace View', category: 'Residential', image: '/projects/p10_img1.jpeg', className: '' },
  { title: 'Spa Bathroom — Skylight', category: 'Kitchen & Bath', image: '/projects/p4_img2.jpeg', className: '' },
  { title: 'Boho Foyer & Entryway', category: 'Residential', image: '/projects/p9_img1.jpeg', className: 'lg:col-span-2' },
  { title: 'Bathroom Walk-in & Vanity', category: 'Kitchen & Bath', image: '/projects/p14_img1.jpeg', className: '' },
]

const projectGroups = [
  {
    id: 'kitchen-bath',
    number: '01',
    title: 'Kitchen & Bath Design',
    course: 'INDE 122',
    description: 'Residential kitchen featuring navy blue cabinetry, marble countertops, and a layout optimised for circulation and daily use. The companion bathroom renovation introduced a skylight and living planter wall — transforming an unused storage zone into the room\'s centrepiece.',
    images: [
      { src: '/projects/p3_img1.jpeg', label: 'Kitchen — Wide View' },
      { src: '/projects/p3_img2.jpeg', label: 'Kitchen — Cooking Zone' },
      { src: '/projects/p4_img3.jpeg', label: 'Bathroom — Arched Vanity' },
      { src: '/projects/p4_img2.jpeg', label: 'Bathroom — Skylight & Planter' },
      { src: '/projects/p2_img1.png', label: 'Kitchen — CAD Floor Plan' },
    ],
  },
  {
    id: 'drafting',
    number: '02',
    title: 'Drafting & Drawing',
    course: 'INDE 50',
    description: 'Hand-drafted floor plans, furniture plans, and interior elevations showcasing precision drafting, accurate scale, clean line quality, and clear spatial communication.',
    images: [
      { src: '/projects/p5_img1.png', label: 'Floor Plan — Hand Drafted' },
      { src: '/projects/p6_img1.png', label: 'Furniture Plan' },
      { src: '/projects/p6_img2.png', label: 'Interior Elevations' },
    ],
  },
  {
    id: 'revit',
    number: '03',
    title: '3D Modeling with Revit',
    course: 'ARCH 65',
    description: 'Compact trailer home designed in Revit, demonstrating 3D modelling, interior space planning, and efficient spatial arrangement within a constrained footprint.',
    images: [
      { src: '/projects/p7_img1.jpeg', label: 'Interior — Living Level' },
      { src: '/projects/p7_img3.jpeg', label: 'Exterior — 3D Model' },
    ],
  },
  {
    id: 'boho-studio',
    number: '04',
    title: 'Boho Interior Design Studio',
    course: 'INDE 71',
    description: 'Collaborative lounge design for up to eight people, blending vintage and boho-inspired furniture, warm wood tones, and layered textiles. Contributions included space planning, furniture curation, and creating a welcoming, character-rich environment.',
    images: [
      { src: '/projects/p9_img1.jpeg', label: 'Foyer & Entryway' },
      { src: '/projects/p10_img1.jpeg', label: 'Living Room — Fireplace View' },
      { src: '/projects/p11_img1.jpeg', label: 'Living Room — Wide View' },
      { src: '/projects/p12_img1.jpeg', label: 'Bedroom Suite' },
    ],
  },
  {
    id: 'client-bath',
    number: '05',
    title: 'Client Bathroom Design',
    course: 'Residential Project',
    description: 'Residential bathroom redesigned for improved layout flow, optimised storage, and a calm modern aesthetic. Features a clawfoot soaking tub, marble double vanity, walk-in wardrobe, and handcrafted hex tile flooring.',
    images: [
      { src: '/projects/p13_img2.jpeg', label: 'Bathroom — Overview' },
      { src: '/projects/p14_img1.jpeg', label: 'Bathroom — Walk-in & Vanity' },
    ],
  },
  {
    id: 'jones',
    number: '06',
    title: 'Jones Architecture & Development',
    course: 'Professional Experience',
    description: 'Contributed to a multi-building apartment feasibility study and sauna design in SketchUp at Jones Architecture & Development — including massing concepts, 3D spatial layout, and schematic site planning.',
    images: [
      { src: '/projects/p15_img1.png', label: 'Apartment Feasibility — Site Plan' },
      { src: '/projects/p16_img1.jpeg', label: 'Sauna Design — SketchUp Model' },
    ],
  },
  {
    id: 'chukchansi',
    number: '07',
    title: 'Chukchansi Tribal Center',
    course: 'Professional Collaboration',
    description: 'Supported the schematic layout development of a 55,000 sq ft tribal centre campus near Yosemite — a five-to-six building complex currently in design-development phase.',
    images: [
      { src: '/projects/p17_img1.jpeg', label: 'Site Context — Yosemite Region' },
      { src: '/projects/p18_img2.png', label: 'Schematic Room Layout' },
      { src: '/projects/p18_img1.png', label: 'Office Floor Plan' },
    ],
  },
  {
    id: 'exterior',
    number: '08',
    title: 'Exterior Finish Selection',
    course: 'Professional Experience',
    description: 'Material specification at Jones Architecture — selecting thermally modified Accoya wood cladding and exterior stone finishes, demonstrating sustainable material thinking and cohesive façade design.',
    images: [
      { src: '/projects/p19_img1.jpeg', label: 'Accoya Wood — Material Study' },
      { src: '/projects/p20_img1.jpeg', label: 'Exterior Timber Reference' },
    ],
  },
]

const allImages = projectGroups.flatMap(g =>
  g.images.map(img => ({ ...img, project: g.title, course: g.course }))
)

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const openLightbox = (src: string) => {
    const idx = allImages.findIndex(img => img.src === src)
    setLightboxIdx(idx >= 0 ? idx : null)
  }

  const prev = useCallback(() =>
    setLightboxIdx(i => i !== null ? (i - 1 + allImages.length) % allImages.length : null), [])
  const next = useCallback(() =>
    setLightboxIdx(i => i !== null ? (i + 1) % allImages.length : null), [])

  useEffect(() => {
    if (lightboxIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIdx, next, prev])

  const current = lightboxIdx !== null ? allImages[lightboxIdx] : null

  return (
    <>
      <section id="portfolio" className="py-24 md:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-5 font-sans">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Selected Works</h2>
          </div>

          {/* Featured grid — click any to open lightbox */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {featured.map((project) => (
              <div
                key={project.image}
                onClick={() => openLightbox(project.image)}
                className={`group relative overflow-hidden aspect-[4/3] cursor-pointer ${project.className}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/65 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2 font-sans">{project.category}</span>
                  <h3 className="text-white font-serif text-xl">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle */}
          <div className="text-center mt-14">
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-3 border border-warm-border text-charcoal px-10 py-4 text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300 font-sans"
            >
              {showAll ? 'Collapse' : 'Browse All Projects'}
              <span className={`inline-block transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>↓</span>
            </button>
          </div>

          {/* All project groups */}
          {showAll && (
            <div className="mt-16 space-y-20">
              {projectGroups.map((group) => (
                <div key={group.id}>
                  <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 pb-6 border-b border-warm-border">
                    <span className="font-serif text-6xl text-gold/20 leading-none">{group.number}</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-serif text-2xl text-charcoal">{group.title}</h3>
                        <span className="text-[9px] tracking-[0.2em] uppercase text-white bg-charcoal px-2.5 py-1 font-sans">
                          {group.course}
                        </span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed font-sans max-w-2xl">{group.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {group.images.map((img) => (
                      <div
                        key={img.src}
                        onClick={() => openLightbox(img.src)}
                        className="group relative overflow-hidden aspect-[4/3] cursor-pointer bg-warm-border/40"
                      >
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-[11px] font-sans leading-tight">{img.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Download */}
              <div className="pt-10 border-t border-warm-border flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/portfolio.pdf"
                  download="Nayara-Ayres-Vieira-Portfolio.pdf"
                  className="inline-flex items-center gap-3 bg-charcoal text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300 font-sans"
                >
                  Download Full Portfolio PDF ↓
                </a>
                <a
                  href="/portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-warm-border text-charcoal px-10 py-4 text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors duration-300 font-sans"
                >
                  View PDF in Browser ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/96 flex items-center justify-center"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10 pointer-events-none">
            <div>
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans">{current.project}</p>
              <p className="text-white/60 text-sm font-sans mt-0.5">{current.label}</p>
            </div>
            <div className="flex items-center gap-6 pointer-events-auto">
              <span className="text-white/25 text-xs font-sans tabular-nums">
                {(lightboxIdx ?? 0) + 1} / {allImages.length}
              </span>
              <button
                onClick={() => setLightboxIdx(null)}
                className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase font-sans"
              >
                Close ✕
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl px-16"
            style={{ height: '80vh' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.label}
              fill
              className="object-contain"
            />
          </div>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 text-2xl font-light"
            aria-label="Previous image"
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 text-2xl font-light"
            aria-label="Next image"
          >
            →
          </button>

          {/* Bottom thumbnail strip */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-5 px-6 overflow-x-auto">
            {allImages.map((img, i) => (
              <button
                key={img.src + i}
                onClick={e => { e.stopPropagation(); setLightboxIdx(i) }}
                className={`flex-shrink-0 w-10 h-10 relative overflow-hidden transition-all duration-200 ${
                  i === lightboxIdx ? 'ring-1 ring-gold opacity-100' : 'opacity-30 hover:opacity-60'
                }`}
              >
                <Image src={img.src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
