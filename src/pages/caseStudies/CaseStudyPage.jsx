import React from "react";
import { motion } from "framer-motion";
import { caseStudies } from "../../assets/json/caseStudies";
import { CaseCard } from "./components";

const CaseStudyPage = () => {
  const publishedStudies = caseStudies.filter((item) => item.isPublished);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#030303] selection:bg-primary selection:text-white">
      {/* Background Noise Setup */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-screen-2xl px-6 pb-20 pt-32 md:px-12 md:pb-32 md:pt-48 lg:px-20"
      >
        {/* Header Area */}
        <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <motion.div variants={itemVariants} className="md:col-span-8">
            <h2 className="mb-6 font-poppins text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              Portfolio
            </h2>
            <h1 className="font-poppins text-6xl font-bold uppercase leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[10rem]">
              Selected
              <br />
              <span className="text-white/40">Works</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 md:mb-6">
            <p className="max-w-md text-lg font-light leading-relaxed text-white/50 md:text-xl">
              A curated collection of digital transformations. We engineer scalable systems, craft premium experiences, and redefine brand ecosystems.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Line */}
        <motion.div
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
           className="mb-20 h-px w-full origin-left bg-white/10"
        />

        {/* Project Grid / List */}
        <div className="flex flex-col gap-12 md:gap-24">
          {publishedStudies.map((item, index) => (
            <CaseCard key={item.slug} item={item} index={index} />
          ))}

          {publishedStudies.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-poppins text-2xl text-white/40">
                New case studies arriving soon.
              </p>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudyPage;