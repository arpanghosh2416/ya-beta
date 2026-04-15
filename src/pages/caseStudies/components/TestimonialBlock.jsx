import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TestimonialBlock = ({ clientRemarks, accentColor }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  if (!clientRemarks) return null;

  return (
    <motion.section
      ref={ref}
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden py-24 md:py-40"
      id="case-testimonial"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Graphic */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 filter blur-[100px]"
        style={{ 
          y: yBg,
          background: `radial-gradient(ellipse at center, ${accentColor || '#BE3887'} 0%, transparent 60%)`
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
        {/* Quote Mark */}
        <div 
          className="mb-10 font-poppins text-[8rem] leading-[0] md:text-[12rem] mx-auto text-center font-bold"
          style={{ color: accentColor || '#BE3887' }}
        >
           “
        </div>

        <p className="mb-16 font-poppins text-2xl font-light italic leading-relaxed text-white sm:text-3xl md:text-5xl">
          {clientRemarks.quote}
        </p>
        
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-poppins text-lg font-bold uppercase tracking-widest text-white">
            {clientRemarks.author}
          </p>
          <p className="text-sm uppercase tracking-widest text-white/40">
            {clientRemarks.designation}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialBlock;
