import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactFormSection = ({ ctaWithForm, accentColor }) => {
  if (!ctaWithForm) return null;

  return (
    <motion.section
      className="border-y border-white/10 bg-[#050505] py-24 md:py-32"
      id="case-contact-form"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Copy */}
        <div>
          <h2 className="mb-6 font-poppins text-4xl font-bold uppercase leading-[1.1] text-white md:text-5xl lg:text-7xl">
            {ctaWithForm.title}
          </h2>
          <p className="mb-10 text-xl font-light leading-relaxed text-white/50 md:text-2xl">
            {ctaWithForm.description}
          </p>
          
          <div className="flex items-center gap-4">
             <div className="h-px flex-1 bg-white/10 max-w-[100px]" />
             <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor || "#BE3887" }}>
               Let's Talk
             </p>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="relative">
          <div className="absolute -inset-4 z-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent blur-2xl opacity-50" />
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-2xl">
            <div className="p-8 md:p-12">
              {ctaWithForm.formActionText && (
                <p className="mb-8 font-poppins text-lg font-medium text-white/80">
                  {ctaWithForm.formActionText}
                </p>
              )}

              {ctaWithForm.formEmbedUrl ? (
                <div className="overflow-hidden rounded-xl bg-white">
                  <iframe
                    src={ctaWithForm.formEmbedUrl}
                    title="Contact Form"
                    className="min-h-[500px] w-full"
                    style={{ border: "none" }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
                  <p className="mb-8 text-lg font-light text-white/60">
                    Ready to build your digital ecosystem? Reach out to our strategists.
                  </p>
                  <Link
                    to={ctaWithForm.link || "/contact-us"}
                    className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#050505] transition-all"
                    style={{ backgroundColor: accentColor || "#BE3887" }}
                  >
                    {ctaWithForm.label}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactFormSection;
