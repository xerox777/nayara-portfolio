const services = [
  {
    number: '01',
    title: 'Residential Design',
    description:
      'Complete interior design for homes — from concept to completion. Every detail thoughtfully curated to reflect your lifestyle and personality.',
  },
  {
    number: '02',
    title: 'Commercial Spaces',
    description:
      'Sophisticated design for boutiques, offices, hotels, and restaurants that leave lasting impressions on every visitor.',
  },
  {
    number: '03',
    title: 'Space Planning',
    description:
      'Strategic layout and flow optimization that makes every square foot feel intentional, effortless, and beautifully considered.',
  },
  {
    number: '04',
    title: 'Design Consultation',
    description:
      'Expert guidance for those seeking professional direction without a full-scope project engagement. Clarity in a single session.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <p className="tracking-[0.4em] uppercase text-xs mb-5 font-sans" style={{ color: 'rgb(255 145 86)' }}>
              Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
              What I offer
            </h2>
          </div>
          <p className="text-white/40 max-w-xs mt-6 md:mt-0 leading-relaxed text-sm font-sans">
            Each project is an opportunity to craft something enduring — a space that tells your story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`p-8 border-b border-white/10 group hover:bg-white/[0.04] transition-colors duration-300
                ${i < services.length - 1 ? 'lg:border-r lg:border-b-0' : 'lg:border-b-0'}
                ${i < 2 ? 'md:border-b-0 md:border-r' : ''}
              `}
            >
              <span className="font-serif text-base text-[rgba(255,145,86,0.5)]">{service.number}</span>
              <h3 className="font-serif text-xl mt-5 mb-4 text-white group-hover:text-[rgb(255,145,86)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-sans">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
