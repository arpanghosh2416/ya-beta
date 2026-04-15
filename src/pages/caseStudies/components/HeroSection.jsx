import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import logoMap from "../logoMap";

const HeroSection = ({
  hero,
  clientName,
  background,
  secondaryColor,
  slug,
}) => {
  const mashupLogo = logoMap[slug];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-12 pt-12 md:justify-center md:pb-20"
      style={{ backgroundColor: background || "#050505" }}
      id="case-hero"
    >
      {/* Fixed Parallax Background */}
      <motion.div
        style={{ y: yPos }}
        className="absolute inset-0 h-full w-full"
      >
        {hero.image && (
          <img
            src={hero.image}
            alt={hero.alt || clientName}
            className="h-full w-full object-cover opacity-40 grayscale transition-all duration-1000 hover:grayscale-0"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at center, ${secondaryColor || "#d4af37"}22, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* Nav Overlay */}
      <motion.div
        className="absolute left-6 top-6 z-50 md:left-12 lg:left-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/case-studies"
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex w-full flex-col items-center pt-0 md:pt-10"
      >
        {/* Mashup Logo (Edge-to-Edge Banner) */}
        {mashupLogo && (
          <motion.div
            className="mb-12 flex w-full justify-center px-4 md:mb-16 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={mashupLogo}
              alt={`${clientName} × Young Architects`}
              className="h-auto max-h-[35vh] w-full max-w-[1600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:max-h-[40vh]"
            />
          </motion.div>
        )}

        <div className="mx-auto w-full max-w-6xl px-6 text-center md:px-12 lg:px-20">
          {/* Tagline */}
          <motion.div
            className="mb-6 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-12 bg-white/20" />
            <p
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: secondaryColor || "#d4af37" }}
            >
              {hero.tagline}
            </p>
            <div className="h-px w-12 bg-white/20" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mb-6 font-poppins text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.title}
          </motion.h1>

          {/* Subtitle */}
          {hero.subtitle && (
            <motion.p
              className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-white/60 sm:text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {hero.subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
