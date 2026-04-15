import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * CTA Banner with 3 variants:
 * - "inline"  → minimal text + arrow link
 * - "dual"    → text + two buttons (primary + secondary)
 * - "full"    → colored card with title, description, urgency text, and button
 */
const CtaBanner = ({ variant = "inline", data, accentColor }) => {
  if (!data) return null;

  if (variant === "inline") {
    return (
      <motion.div
        className="mx-auto max-w-5xl px-6 py-6 md:px-12 lg:px-0"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-start gap-3 rounded-xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm text-gray-600 sm:text-base">{data.text}</p>
          <Link
            to={data.link || "/contact-us"}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
            style={{ color: accentColor || "#BE3887" }}
          >
            {data.label}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </motion.div>
    );
  }

  if (variant === "dual") {
    return (
      <motion.div
        className="mx-auto max-w-5xl px-6 py-8 md:px-12 lg:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
          <p className="mb-5 text-base text-gray-600 sm:text-lg">{data.note}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={data.primaryLink || "/contact-us"}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110"
              style={{ backgroundColor: accentColor || "#BE3887" }}
            >
              {data.primaryLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            {data.secondaryLink && (
              <a
                href={data.secondaryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-sm font-bold transition-all duration-300 hover:bg-gray-50"
                style={{
                  borderColor: accentColor || "#BE3887",
                  color: accentColor || "#BE3887",
                }}
              >
                {data.secondaryLabel}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "full") {
    return (
      <motion.div
        className="mx-auto max-w-5xl px-6 py-8 md:px-12 lg:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="relative overflow-hidden rounded-2xl p-8 text-white sm:p-10 md:p-12"
          style={{
            background: `linear-gradient(135deg, ${accentColor || "#BE3887"}, #3983C5)`,
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />

          <div className="relative z-10">
            <h3 className="mb-3 font-poppins text-2xl font-bold sm:text-3xl">
              {data.title}
            </h3>
            <p className="mb-2 max-w-2xl text-base text-white/80 sm:text-lg">
              {data.description}
            </p>
            {data.urgencyText && (
              <p className="mb-6 text-sm italic text-white/60">
                {data.urgencyText}
              </p>
            )}
            <Link
              to={data.link || "/contact-us"}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:shadow-lg"
              style={{ color: accentColor || "#BE3887" }}
            >
              {data.label}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
};

export default CtaBanner;
