import React from "react";
import { motion } from "framer-motion";

const TestimonialBlock = ({ clientRemarks, accentColor }) => {
  if (!clientRemarks) return null;

  return (
    <motion.section
      className="py-12 md:py-16"
      id="case-testimonial"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-0">
        <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 sm:p-10 md:p-12">
          {/* Large quotation mark */}
          <div
            className="absolute -left-2 -top-4 font-poppins text-[120px] font-bold leading-none opacity-10 sm:text-[160px]"
            style={{ color: accentColor || "#BE3887" }}
          >
            "
          </div>

          {/* Accent left border */}
          <div
            className="absolute bottom-0 left-0 top-0 w-1.5 rounded-full"
            style={{ backgroundColor: accentColor || "#BE3887" }}
          />

          <div className="relative z-10">
            <p className="mb-6 font-poppins text-lg font-medium italic leading-relaxed text-gray-700 sm:text-xl md:text-2xl">
              "{clientRemarks.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: accentColor || "#BE3887" }}
              >
                {clientRemarks.author?.charAt(0) || "C"}
              </div>
              <div>
                <p className="font-poppins text-sm font-bold text-gray-900">
                  {clientRemarks.author}
                </p>
                <p className="text-xs text-gray-500">{clientRemarks.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialBlock;
