import React from "react";
import { motion } from "framer-motion";

const PainPointCard = ({ entity, index, accentColor }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 transition-all hover:bg-white/[0.04]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Background Glow on Hover */}
      <div 
        className="absolute -inset-x-20 -inset-y-20 z-0 bg-gradient-radial blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-20"
        style={{ 
          backgroundImage: `radial-gradient(circle at 50% 50%, ${accentColor || '#BE3887'} 0%, transparent 50%)`
        }} 
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-12 lg:gap-20">
        {/* Left Side: Meta */}
        <div className="md:w-1/3 shrink-0">
          <span
            className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md"
          >
            {entity.category}
          </span>
          <h3 className="font-poppins text-2xl font-bold uppercase leading-tight text-white md:text-3xl lg:text-4xl">
            {entity.entityName}
          </h3>
        </div>

        {/* Right Side: Data Grid */}
        <div className="flex-1 grid gap-8 sm:grid-cols-2">
          {/* Pain Point */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">
                The Problem
              </p>
            </div>
            <p className="text-lg font-light leading-relaxed text-white/50">
              {entity.painPoint}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#10b981]">
                Our Solution
              </p>
            </div>
            <p className="text-lg font-light leading-relaxed text-white/80">
              {entity.solution}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PainPointCard;
