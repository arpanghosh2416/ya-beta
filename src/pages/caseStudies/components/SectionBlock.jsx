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
      className={`relative border-t border-white/5 py-24 md:py-32 ${className}`}
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Sticky Left Sidebar */}
        <div className="md:col-span-5 relative">
          <div className="sticky top-32">
            {/* Section Label */}
            {label && (
              <div className="mb-6 flex items-center gap-4">
                <div 
                  className="h-2 w-2 rounded-full" 
                  style={{ backgroundColor: accentColor || "#BE3887" }} 
                />
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: accentColor || "#BE3887" }}
                >
                  {label}
                </p>
              </div>
            )}

            {/* Title */}
            {title && (
              <h2 className="font-poppins text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-7">
          {description && (
            <p className="mb-12 text-xl font-light leading-relaxed text-white/60 md:text-2xl">
              {description}
            </p>
          )}
          
          <div className="text-white/80">
            {children}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default SectionBlock;
