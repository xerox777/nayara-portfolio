import Image from 'next/image'

const projects = [
  {
    title: 'The Aldene Residence',
    location: 'São Paulo, Brazil',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
    className: 'lg:col-span-2',
  },
  {
    title: 'Casa Branca',
    location: 'Rio de Janeiro, Brazil',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80',
    className: '',
  },
  {
    title: 'Maison Collective',
    location: 'Lisbon, Portugal',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
    className: '',
  },
  {
    title: 'Terraço Lagos',
    location: 'Algarve, Portugal',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
    className: 'lg:col-span-2',
  },
  {
    title: 'Studio Noir',
    location: 'New York, USA',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
    className: '',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.4em] uppercase text-xs mb-5 font-sans">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden aspect-[4/3] ${project.className}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/65 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2 font-sans">
                  {project.category}
                </span>
                <h3 className="text-white font-serif text-xl">{project.title}</h3>
                <p className="text-white/55 text-sm mt-1 font-sans">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
