import React from "react";
import { motion } from "framer-motion";
import { caseStudies } from "../../assets/json/caseStudies";
import { CaseCard } from "./components";

const CaseStudyPage = () => {
  const publishedStudies = caseStudies.filter((item) => item.isPublished);

  return (
    <div id="case-studies" className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Header */}
      <section className="relative overflow-hidden px-6 pb-12 pt-20 md:px-12 md:pb-16 md:pt-28 lg:px-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-blue/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-40 w-40 rounded-full bg-primary-blue-ed/5 blur-2xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Top label */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-primary to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Our Premium
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-primary to-transparent" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mb-4 font-poppins text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Case{" "}
            <span className="bg-gradient-to-r from-primary via-primary-blue-ed to-primary-blue bg-clip-text text-transparent">
              Studies
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore how we have helped businesses strengthen digital presence,
            improve communication, and build scalable growth systems.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="mt-8 h-px bg-gradient-to-r from-primary/40 via-primary-blue/20 to-transparent"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </section>

      {/* Cards Grid */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {publishedStudies.map((item, index) => (
              <CaseCard key={item.slug} item={item} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {publishedStudies.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-gray-500">
                No case studies published yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;