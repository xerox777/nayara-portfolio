export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.4em] uppercase text-xs mb-5 font-sans">
            Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Let's work together
          </h2>
          <p className="text-white/40 max-w-md mx-auto leading-relaxed font-sans text-sm">
            Whether you're ready to start a project or simply want to explore the possibilities,
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-sans">Email</p>
              <a
                href="mailto:hello@nayaravieira.com"
                className="text-white hover:text-gold transition-colors text-lg font-sans"
              >
                hello@nayaravieira.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-sans">Instagram</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors text-lg font-sans"
              >
                @nayaravieira.design
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-sans">Based in</p>
              <p className="text-white text-lg font-sans">São Paulo, Brazil</p>
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/35 text-sm leading-relaxed font-sans">
                Accepting new projects for 2025 – 2026.<br />Response within 48 hours.
              </p>
            </div>
          </div>

          <form className="space-y-8">
            {[
              { label: 'Name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email', type: 'email', placeholder: 'your@email.com' },
              { label: 'Project Type', type: 'text', placeholder: 'Residential, Commercial...' },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3 font-sans">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border-b border-white/15 bg-transparent py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                />
              </div>
            ))}
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3 font-sans">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your vision..."
                className="w-full border-b border-white/15 bg-transparent py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors resize-none font-sans text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300 mt-2 font-sans"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
