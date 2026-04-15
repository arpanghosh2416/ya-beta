import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import logoMap from "../logoMap";

const CaseCard = ({ item, index }) => {
  const mashupLogo = logoMap[item.slug];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative w-full"
    >
      <Link
        to={`/case-studies/${item.slug}`}
        className="block w-full overflow-hidden rounded-[2rem] bg-[#0f0f0f]"
      >
        <div className="relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden">
          {/* Base Image with Parallax & Filter effect */}
          <div className="absolute inset-0 z-0">
            <img
              src={item.bg}
              alt=""
              className="h-full w-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-700 group-hover:bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex-1">
                {/* Meta Row */}
                <div className="mb-4 flex items-center gap-4 overflow-hidden">
                  <motion.span
                    className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {item.pageType === "multi-entity-single-client"
                      ? "Multi-Entity"
                      : "Single-Entity"}
                  </motion.span>
                </div>

                {/* Title */}
                <motion.h2
                  className="font-poppins text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-7xl"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {item.clientName}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                  className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-white/70"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {item.hero.tagline}
                </motion.p>
              </div>

              {/* Logo / Action */}
              <div className="flex shrink-0 flex-col items-start md:items-end gap-6">
                {mashupLogo && (
                  <motion.img
                    src={mashupLogo}
                    alt={`${item.clientName} logo`}
                    className="h-12 w-auto opacity-50 drop-shadow-2xl transition-opacity duration-500 group-hover:opacity-100 md:h-16"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  />
                )}

                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                  initial={{ rotate: -45, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <svg className="h-6 w-6 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Services */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2 md:mt-12 md:gap-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {item.services?.map((service) => (
                <span
                  key={service.id}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm transition-colors duration-300 group-hover:bg-primary/80"
                >
                  {service.title}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseCard;
