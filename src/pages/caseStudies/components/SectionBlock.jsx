import React from "react";
import { motion } from "framer-motion";

const SectionBlock = ({
  label,
  title,
  description,
  accentColor,
  children,
  className = "",
  id,
}) => {
  return (
    <motion.section
      className={`py-12 md:py-16 ${className}`}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-0">
        {/* Section Label */}
        {label && (
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: accentColor || "#BE3887" }}
          >
            {label}
          </p>
        )}

        {/* Title */}
        {title && (
          <h2 className="mb-4 font-poppins text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            {title}
          </h2>
        )}

        {/* Accent underline */}
        <div
          className="mb-6 h-1 w-16 rounded-full"
          style={{ backgroundColor: accentColor || "#BE3887" }}
        />

        {/* Description */}
        {description && (
          <p className="max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {description}
          </p>
        )}

        {/* Additional children content */}
        {children}
      </div>
    </motion.section>
  );
};

export default SectionBlock;
