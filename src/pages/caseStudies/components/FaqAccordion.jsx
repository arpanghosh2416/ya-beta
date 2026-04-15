import React from "react";
import { Disclosure } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const FaqAccordion = ({ faq, accentColor }) => {
  if (!faq || faq.length === 0) return null;

  return (
    <motion.section
      className="py-24 md:py-32"
      id="case-faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-screen-md px-6 md:px-12">
        <div className="mb-16 text-center">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: accentColor || "#BE3887" }}
          >
            Insights
          </p>
          <h2 className="font-poppins text-4xl font-bold uppercase text-white md:text-5xl">
            Frequent Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                    open
                      ? "border-white/20 bg-white/5"
                      : "border-white/5 bg-transparent hover:border-white/10"
                  }`}
                >
                  <Disclosure.Button className="flex w-full items-center justify-between px-8 py-6 text-left outline-none">
                    <span className="pr-8 font-poppins text-lg font-medium text-white md:text-xl">
                      {item.question}
                    </span>
                    <span 
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20"
                    >
                      <svg
                        className={`h-5 w-5 text-white transition-transform duration-500 ${
                          open ? "rotate-45" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </Disclosure.Button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <Disclosure.Panel
                        static
                        as={motion.div}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 pb-8 pt-2">
                          <p className="text-lg font-light leading-relaxed text-white/50">
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
