import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoMap from "../logoMap";

const HeroSection = ({ hero, clientName, background, secondaryColor, slug }) => {
  const mashupLogo = logoMap[slug];

  return (
    <section
      className="relative flex min-h-[60vh] items-end overflow-hidden md:min-h-[70vh]"
      style={{ backgroundColor: background || "#0a0f1a" }}
      id="case-hero"
    >
      {/* Background Image */}
      {hero.image && (
        <img
          src={hero.image}
          alt={hero.alt || clientName}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at bottom left, ${secondaryColor || "#d4af37"}33, transparent 60%)`,
        }}
      />

      {/* Breadcrumb */}
      <motion.div
        className="absolute left-6 top-6 z-20 md:left-12 lg:left-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Case Studies
        </Link>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 pb-12 pt-32 md:px-12 md:pb-16 lg:px-20">
        <div className="mx-auto max-w-5xl">
          {/* Mashup Logo */}
          {mashupLogo && (
            <motion.img
              src={mashupLogo}
              alt={`${clientName} × Young Architects`}
              className="mb-6 h-14 w-auto sm:h-16 md:h-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          )}

          {/* Tagline Label */}
          <motion.p
            className="mb-3 text-xs font-bold uppercase tracking-[0.25em] sm:text-sm"
            style={{ color: secondaryColor || "#d4af37" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {hero.tagline}
          </motion.p>

          {/* Title */}
          <motion.h1
            className="mb-4 font-poppins text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {hero.title}
          </motion.h1>

          {/* Subtitle */}
          {hero.subtitle && (
            <motion.p
              className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {hero.subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
