import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalData } from '../data';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [sent, setSent] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_fzbl8wd',
        'template_zl4o8f3',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'codesnippet17@gmail.com',
        },
        'qoCcjVTYzdp_yopGF'
      );

      setFormData({ name: '', email: '', message: '' });
      setSent(true);

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Header block (unchanged style) */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#FAF9F6] border border-on-surface flex rounded-none p-0.5 shadow-sm">
          <button className="px-6 py-2 font-mono text-xs font-bold uppercase tracking-widest bg-primary text-on-primary">
            Transmission Form
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="glass-card rounded-none p-8 sm:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 border border-on-surface bg-white"
        >

          {/* LEFT SIDE */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 flex flex-col justify-between">

            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-[0.4em] block border-b border-on-surface/10 pb-1.5 mb-4">
                SECURE NETLINK
              </span>

              <h2 className="font-serif italic text-4xl sm:text-5xl font-extrabold text-on-surface leading-[1.1] mb-6">
                Ready to build <br />
                <span className="underline decoration-primary decoration-4">
                  extraordinary?
                </span>
              </h2>

              <p className="font-serif italic text-base text-on-surface-variant leading-relaxed mb-8">
                “I'm currently accepting select projects, internships, and engineering consulting opportunities.”
              </p>

              <div className="space-y-4">

                {/* Email Card */}
                <a
                  href={`mailto:${personalData.contacts.email}`}
                  className="group flex items-center gap-4 bg-[#FAF9F6] p-4 border border-on-surface/20 rounded-xl
               transition-all duration-200
               hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-on-surface-variant">
                      Direct Email
                    </div>

                    <div className="font-semibold text-sm text-on-surface group-hover:text-primary transition-colors">
                      {personalData.contacts.email}
                    </div>
                  </div>

                  <span className="material-symbols-outlined text-xs text-on-surface-variant opacity-0 group-hover:opacity-100 transition">
                    mail
                  </span>
                </a>

                {/* Location Card */}
                <div
                  className="flex items-center gap-4 bg-[#FAF9F6] p-4 border border-on-surface/20 rounded-xl
               transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="flex-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-on-surface-variant">
                      Location
                    </div>

                    <div className="font-semibold text-sm text-on-surface">
                      {personalData.contacts.location}
                    </div>
                  </div>

                  <span className="material-symbols-outlined text-xs text-on-surface-variant">
                    location_on
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE (FORM ONLY) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full bg-[#FAF9F6] border border-on-surface rounded-none px-4 py-3 focus:outline-none focus:bg-white outline-hidden transition-all font-serif italic text-sm text-on-surface disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full bg-[#FAF9F6] border border-on-surface rounded-none px-4 py-3 focus:outline-none focus:bg-white outline-hidden transition-all font-serif italic text-sm text-on-surface disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                  Message Body
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your product requirements..."
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full bg-[#FAF9F6] border border-on-surface rounded-none px-4 py-3 focus:outline-none focus:bg-white outline-hidden transition-all font-serif italic text-sm text-on-surface disabled:opacity-50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="w-full py-4 bg-primary text-on-primary font-mono font-bold text-xs uppercase tracking-[0.2em] rounded-none border border-primary hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm md:shadow-md"
              >
                <span>
                  {isSubmitting ? 'Transmitting Stream...' : 'Send Transmission'}
                </span>
              </button>
            </form>
          </div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
}