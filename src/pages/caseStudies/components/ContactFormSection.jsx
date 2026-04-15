import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactFormSection = ({ ctaWithForm, accentColor }) => {
  if (!ctaWithForm) return null;

  return (
    <motion.section
      className="py-12 md:py-16"
      id="case-contact-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-0">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
          {/* Header */}
          <div
            className="p-6 text-white sm:p-8"
            style={{
              background: `linear-gradient(135deg, ${accentColor || "#BE3887"}, #3983C5)`,
            }}
          >
            <h2 className="mb-2 font-poppins text-xl font-bold sm:text-2xl md:text-3xl">
              {ctaWithForm.title}
            </h2>
            <p className="text-sm text-white/80 sm:text-base">
              {ctaWithForm.description}
            </p>
          </div>

          {/* Form Embed Area */}
          <div className="p-6 sm:p-8">
            {ctaWithForm.formActionText && (
              <p className="mb-6 text-center text-sm text-gray-500">
                {ctaWithForm.formActionText}
              </p>
            )}

            {ctaWithForm.formEmbedUrl ? (
              <div className="mx-auto max-w-lg">
                <iframe
                  src={ctaWithForm.formEmbedUrl}
                  title="Contact Form"
                  className="min-h-[400px] w-full rounded-xl border border-gray-200"
                  style={{ border: "none" }}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="text-center">
                <p className="mb-4 text-gray-600">
                  Ready to get started? Reach out to our team.
                </p>
                <Link
                  to={ctaWithForm.link || "/contact-us"}
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: accentColor || "#BE3887" }}
                >
                  {ctaWithForm.label}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactFormSection;
