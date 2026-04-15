import React from "react";
import { motion } from "framer-motion";

const OutcomeSection = ({ outcomes, accentColor }) => {
  if (!outcomes) return null;

  return (
    <motion.section
      className="border-t border-white/10 bg-[#050505] py-24 md:py-32"
      id="case-outcomes"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Intro */}
        <div className="md:col-span-5">
           <div className="mb-6 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#10b981]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#10b981]">
                Impact
              </p>
            </div>
          <h2 className="mb-8 font-poppins text-4xl font-bold uppercase leading-[1.1] text-white md:text-5xl lg:text-6xl">
            {outcomes.title}
          </h2>
          <p className="text-xl font-light leading-relaxed text-white/50">
            {outcomes.summary}
          </p>
        </div>

        {/* Right Metrics Grid */}
        <div className="md:col-span-7">
          <div className="grid gap-6 sm:grid-cols-2">
            {outcomes.points.map((point, i) => (
              <motion.div
                key={i}
                className="group flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.05]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div 
                  className="mb-8 text-4xl font-light" 
                  style={{ color: accentColor || "#BE3887" }}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="font-poppins text-xl font-medium leading-normal text-white md:text-2xl">
                  {point}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default OutcomeSection;
