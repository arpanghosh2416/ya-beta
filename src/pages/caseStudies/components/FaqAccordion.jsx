import React from "react";
import { Disclosure } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const FaqAccordion = ({ faq, accentColor }) => {
  if (!faq || faq.length === 0) return null;

  return (
    <motion.section
      className="bg-gray-50 py-12 md:py-16"
      id="case-faq"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-0">
        <p
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: accentColor || "#BE3887" }}
        >
          Have Questions?
        </p>
        <h2 className="mb-4 font-poppins text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div
          className="mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: accentColor || "#BE3887" }}
        />

        <div className="space-y-3">
          {faq.map((item, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    open
                      ? "border-gray-200 bg-white shadow-sm"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-5 text-left">
                    <span className="pr-4 font-poppins text-sm font-semibold text-gray-900 sm:text-base">
                      {item.question}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      style={{ color: accentColor || "#BE3887" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Disclosure.Button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <Disclosure.Panel
                        static
                        as={motion.div}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FaqAccordion;
