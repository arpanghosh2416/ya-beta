import React from "react";
import { motion } from "framer-motion";

const OutcomeSection = ({ outcomes, accentColor }) => {
  if (!outcomes) return null;

  return (
    <motion.section
      className="bg-gray-50 py-12 md:py-16"
      id="case-outcomes"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-0">
        <p
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: accentColor || "#BE3887" }}
        >
          Results & Impact
        </p>
        <h2 className="mb-4 font-poppins text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          {outcomes.title}
        </h2>
        <div
          className="mb-6 h-1 w-16 rounded-full"
          style={{ backgroundColor: accentColor || "#BE3887" }}
        />
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
          {outcomes.summary}
        </p>

        {/* Outcome Points */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.points.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${accentColor || "#BE3887"}20` }}
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={accentColor || "#BE3887"}
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OutcomeSection;
