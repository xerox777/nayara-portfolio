'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? 'sent' : 'error');
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="tracking-[0.4em] uppercase text-xs mb-5 font-sans" style={{ color: 'rgb(255 145 86)' }}>
            Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Let's work together
          </h2>
          <p className="text-white max-w-md mx-auto leading-relaxed font-sans text-sm">
            Whether you're ready to start a project or simply want to explore the possibilities,
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <p className="tracking-[0.3em] uppercase mb-3 font-sans font-bold" style={{ color: 'rgb(255 145 86)', fontSize: 'medium' }}>Email</p>
              <a href="mailto:nayaraayresvieira@gmail.com" className="text-white hover:text-gold transition-colors text-lg font-sans">
                nayaraayresvieira@gmail.com
              </a>
            </div>
            <div>
              <p className="tracking-[0.3em] uppercase mb-3 font-sans font-bold" style={{ color: 'rgb(255 145 86)', fontSize: 'medium' }}>Instagram</p>
              <a href="https://instagram.com/nayaravieiradesign" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors text-lg font-sans">
                @nayaravieiradesign
              </a>
            </div>
            <div>
              <p className="tracking-[0.3em] uppercase mb-3 font-sans font-bold" style={{ color: 'rgb(255 145 86)', fontSize: 'medium' }}>LinkedIn</p>
              <a href="https://linkedin.com/in/nayara-ayres-vieira" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors text-lg font-sans">
                Nayara Ayres Vieira
              </a>
            </div>
            <div>
              <p className="tracking-[0.3em] uppercase mb-3 font-sans font-bold" style={{ color: 'rgb(255 145 86)', fontSize: 'medium' }}>Phone</p>
              <a href="tel:+16507138757" className="text-white hover:text-gold transition-colors text-lg font-sans">
                (650) 713-8757
              </a>
            </div>
            <div>
              <p className="tracking-[0.3em] uppercase mb-3 font-sans font-bold" style={{ color: 'rgb(255 145 86)', fontSize: 'medium' }}>Based in</p>
              <p className="text-white text-lg font-sans">Bay Area, California</p>
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/35 text-sm leading-relaxed font-sans">
                Available for residential and commercial projects.<br />Response within 48 hours.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
              { label: 'Project Type', key: 'projectType', type: 'text', placeholder: 'Residential, Commercial...' },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-white mb-3 font-sans">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  required
                  className="w-full border-b border-white/15 bg-transparent py-3 text-white placeholder-white focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                />
              </div>
            ))}
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-white mb-3 font-sans">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your vision..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full border-b border-white/15 bg-transparent py-3 text-white placeholder-white focus:outline-none focus:border-gold transition-colors resize-none font-sans text-sm"
              />
            </div>
            {status === 'sent' && (
              <p className="text-green-400 text-sm font-sans">Message sent! I'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm font-sans">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full bg-gold text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300 mt-2 font-sans disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
