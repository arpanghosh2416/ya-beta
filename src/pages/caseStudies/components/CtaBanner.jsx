import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CtaBanner = ({ variant = "inline", data, accentColor }) => {
  if (!data) return null;

  if (variant === "inline") {
    return (
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20">
        <motion.div
          className="flex flex-col items-start gap-6 border-b border-white/10 pb-16 pt-8 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg md:text-xl font-light text-white/60 max-w-2xl">{data.text}</p>
          <Link
            to={data.link || "/contact-us"}
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/10 bg-white/5 pl-8 pr-16 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:border-white/30"
          >
            {data.label}
            <div 
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: accentColor || "#BE3887" }}
            >
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    );
  }

  if (variant === "dual") {
    return (
      <motion.div
        className="mx-auto max-w-screen-2xl px-6 py-12 md:px-12 lg:px-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 lg:p-16 text-center shadow-2xl">
          <p className="mx-auto mb-10 max-w-3xl text-xl md:text-2xl font-light text-white/70">{data.note}</p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              to={data.primaryLink || "/contact-us"}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
              style={{ backgroundColor: accentColor || "#BE3887" }}
            >
              <span className="relative z-10">{data.primaryLabel}</span>
              <div className="absolute inset-0 z-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            {data.secondaryLink && (
              <a
                href={data.secondaryLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
              >
                {data.secondaryLabel}
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
          className="border-y border-white/10 bg-black/40 py-24 md:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <h3 className="mb-6 font-poppins text-4xl font-bold uppercase leading-tight text-white md:text-6xl lg:text-7xl">
              {data.title}
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-xl font-light text-white/50 md:text-2xl">
              {data.description}
            </p>
            {data.urgencyText && (
              <p className="mb-12 font-poppins text-sm uppercase tracking-widest" style={{ color: accentColor || "#BE3887" }}>
                {data.urgencyText}
              </p>
            )}
            <Link
              to={data.link || "/contact-us"}
              className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
            >
              {data.label}
              <span 
                className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: accentColor || "#BE3887" }}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>
    );
  }

  return null;
};

export default CtaBanner;
