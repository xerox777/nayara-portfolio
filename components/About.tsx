import Image from 'next/image'

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Completed' },
  { value: '15+', label: 'Design Awards' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Elegant interior by Nayara"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/50 -z-10 pointer-events-none" />
          </div>

          <div>
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-5 font-sans">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
              Designing spaces<br />that inspire
            </h2>
            <div className="space-y-5 text-muted leading-relaxed font-sans text-[15px]">
              <p>
                Nayara Ayres-Vieira is a luxury interior designer with a passion for creating spaces that
                seamlessly blend sophistication with warmth. Her work is rooted in the belief that great
                design elevates everyday living.
              </p>
              <p>
                With an eye for timeless elegance and meticulous attention to detail, Nayara brings each
                client's unique vision to life — from intimate residences to expansive commercial spaces
                across Brazil, Portugal, and beyond.
              </p>
              <p>
                Her approach balances artistry with functionality, ensuring every space is not only
                beautiful, but deeply liveable.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-warm-border flex gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl text-charcoal">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted mt-1 font-sans">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
