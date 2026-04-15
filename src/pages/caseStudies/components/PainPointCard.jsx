import React from "react";
import { motion } from "framer-motion";

const PainPointCard = ({ entity, index, accentColor }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
        <span
          className="mb-1 inline-block rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: accentColor || "#3983C5" }}
        >
          {entity.category}
        </span>
        <h3 className="mt-2 font-poppins text-lg font-bold text-gray-900">
          {entity.entityName}
        </h3>
      </div>

      {/* Pain Point & Solution — side by side */}
      <div className="grid gap-0 md:grid-cols-2">
        {/* Pain Point */}
        <div className="border-b border-gray-100 p-6 md:border-b-0 md:border-r">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100">
              <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.834-1.964-.834-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-red-500">
              Pain Point
            </p>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">{entity.painPoint}</p>
        </div>

        {/* Solution */}
        <div className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Solution
            </p>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">{entity.solution}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PainPointCard;
