import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoMap from "../logoMap";

const CaseCard = ({ item, index }) => {
  const mashupLogo = logoMap[item.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Link
        to={`/case-studies/${item.slug}`}
        className="group block h-full"
        id={`case-card-${item.slug}`}
      >
        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(190,56,135,0.15)]">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src={item.bg}
              alt=""
              className="h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
            {/* Badge */}
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item.pageType === "multi-entity-single-client"
                  ? "Multi-Entity"
                  : "Single-Entity"}
              </span>
            </div>

            {/* Client Name */}
            <h2 className="mb-3 font-poppins text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary sm:text-3xl">
              {item.clientName}
            </h2>

            {/* Tagline */}
            <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400 sm:text-base">
              {item.hero.tagline}
            </p>

            {/* Service Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {item.services?.map((service) => (
                <span
                  key={service.id}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 transition-colors duration-300 group-hover:border-primary-blue/30 group-hover:text-primary-blue-ed"
                >
                  {service.title}
                </span>
              ))}
            </div>

            {/* Bottom row: CTA + Logo */}
            <div className="flex items-end justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                View Case Study
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              {mashupLogo && (
                <img
                  src={mashupLogo}
                  alt={`${item.clientName} × YA`}
                  className="h-10 w-auto opacity-40 transition-opacity duration-300 group-hover:opacity-70 sm:h-12"
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseCard;
