import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseDetails } from "../../assets/json/case";
import {
  HeroSection,
  SectionBlock,
  CtaBanner,
  PainPointCard,
  OutcomeSection,
  TestimonialBlock,
  FaqAccordion,
  ContactFormSection,
} from "./components";

const CaseStudy = () => {
  const { slug } = useParams();
  const item = caseDetails.find((c) => c.slug === slug);

  // 404 — Case study not found
  if (!item) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-10 w-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="mb-2 font-poppins text-3xl font-bold text-gray-900">
            Case Study Not Found
          </h1>
          <p className="mb-8 text-gray-500">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
        </motion.div>
      </div>
    );
  }

  const accent = item.secondaryColor || "#BE3887";

  return (
    <div className="min-h-screen bg-white" id={`case-study-${slug}`}>
      {/* ───────── HERO ───────── */}
      <HeroSection
        hero={item.hero}
        clientName={item.clientName}
        background={item.background}
        secondaryColor={accent}
        slug={slug}
      />

      {/* ───────── TOP CTA (YA + Client buttons) ───────── */}
      <CtaBanner variant="dual" data={item.ctaTop} accentColor={accent} />

      {/* ───────── MULTI-ENTITY SERVICE ───────── */}
      {item.multiEntityService && (
        <SectionBlock
          label="Our Approach"
          title={item.multiEntityService.title}
          description={item.multiEntityService.description}
          accentColor={accent}
          id="case-approach"
        />
      )}

      {/* ───────── CTA AFTER SERVICE ───────── */}
      <CtaBanner variant="inline" data={item.ctaAfterService} accentColor={accent} />

      {/* ───────── DIFFERENT ENTITY NEEDS ───────── */}
      {item.differentEntityNeeds && (
        <SectionBlock
          label="The Challenge"
          title={item.differentEntityNeeds.title}
          description={item.differentEntityNeeds.description}
          accentColor={accent}
          id="case-challenge"
          className="bg-gray-50"
        />
      )}

      {/* ───────── CTA AFTER DIFFERENT NEEDS ───────── */}
      <CtaBanner
        variant="inline"
        data={item.ctaAfterDifferentNeeds}
        accentColor={accent}
      />

      {/* ───────── PAIN POINTS & SOLUTIONS ───────── */}
      {item.painPointsAndSolutions && (
        <SectionBlock
          label="Pain Points & Solutions"
          title={item.painPointsAndSolutions.title}
          description={item.painPointsAndSolutions.intro}
          accentColor={accent}
          id="case-pain-solutions"
        >
          <div className="mt-8 space-y-5">
            {item.painPointsAndSolutions.entities.map((entity, i) => (
              <PainPointCard
                key={i}
                entity={entity}
                index={i}
                accentColor={accent}
              />
            ))}
          </div>
        </SectionBlock>
      )}

      {/* ───────── URGENCY MID CTA ───────── */}
      <CtaBanner variant="full" data={item.ctaUrgencyMid} accentColor={accent} />

      {/* ───────── OUTCOMES ───────── */}
      <OutcomeSection outcomes={item.outcomes} accentColor={accent} />

      {/* ───────── CLIENT REMARKS / TESTIMONIAL ───────── */}
      <TestimonialBlock clientRemarks={item.clientRemarks} accentColor={accent} />

      {/* ───────── CONTACT FORM (GHL) ───────── */}
      <ContactFormSection ctaWithForm={item.ctaWithForm} accentColor={accent} />

      {/* ───────── FAQ ───────── */}
      <FaqAccordion faq={item.faq} accentColor={accent} />

      {/* ───────── FINAL CTA ───────── */}
      <CtaBanner variant="full" data={item.finalCta} accentColor={accent} />

      {/* ───────── BACK LINK ───────── */}
      <motion.div
        className="mx-auto max-w-5xl px-6 py-10 md:px-12 lg:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to all Case Studies
        </Link>
      </motion.div>
    </div>
  );
};

export default CaseStudy;
