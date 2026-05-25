import Image from 'next/image'

const skills = [
  { label: 'Space Planning & Drafting' },
  { label: '3D Modeling — Revit & SketchUp' },
  { label: 'Kitchen & Bath Design' },
  { label: 'Material & Finish Curation' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/projects/p11_img1.jpeg"
                alt="Living room design by Nayara Ayres Vieira"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/50 -z-10 pointer-events-none" />
          </div>

          <div>
            <p className="tracking-[0.4em] uppercase text-xs mb-5 font-sans" style={{ color: 'rgb(255 145 86)' }}>
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
              Designing spaces<br />that inspire
            </h2>
            <div className="space-y-5 text-muted leading-relaxed font-sans text-[15px]">
              <p>
                Nayara Ayres Vieira is an interior designer with a passion for creating spaces that
                balance warmth, function, and beauty. Her work spans residential interiors — from
                kitchens and bathrooms to full living spaces — each one shaped by careful attention
                to detail and a deep respect for how people live.
              </p>
              <p>
                With a strong foundation in space planning, 3D visualization, and material selection,
                Nayara brings a technical and artistic eye to every project. Her professional experience
                includes collaborating at Jones Architecture & Development, where she contributed to
                conceptual design, mood boards, and 3D modeling in SketchUp.
              </p>
              <p>
                Her approach is rooted in the belief that every space — no matter the scale — deserves
                to feel intentional, liveable, and uniquely yours.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-warm-border">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-5 font-sans" style={{ color: 'rgb(255 145 86)' }}>
                Specialties
              </p>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill.label} className="flex items-center gap-3 font-sans text-sm text-charcoal">
                    <span className="w-4 h-px bg-gold flex-shrink-0" />
                    {skill.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
