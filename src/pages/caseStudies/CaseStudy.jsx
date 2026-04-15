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

  if (!item) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6 text-center">
        <motion.h1 
          className="font-poppins text-8xl font-bold text-white/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>
        <p className="mt-6 font-poppins text-2xl text-white">Project Not Found</p>
        <Link
          to="/case-studies"
          className="mt-10 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Derive theme from data or enforce dark mode baseline
  const bgColor = item.background || "#050505";
  const accent = item.secondaryColor || "#BE3887";

  return (
    <div 
      className="min-h-screen transition-colors duration-1000 ease-in-out selection:bg-primary selection:text-white" 
      style={{ backgroundColor: bgColor }} 
      id={`case-study-${slug}`}
    >
      <HeroSection
        hero={item.hero}
        clientName={item.clientName}
        background={bgColor}
        secondaryColor={accent}
        slug={slug}
      />

      <CtaBanner variant="dual" data={item.ctaTop} accentColor={accent} />

      {item.multiEntityService && (
        <SectionBlock
          label="Our Approach"
          title={item.multiEntityService.title}
          description={item.multiEntityService.description}
          accentColor={accent}
        />
      )}

      <CtaBanner variant="inline" data={item.ctaAfterService} accentColor={accent} />

      {item.differentEntityNeeds && (
        <SectionBlock
          label="The Challenge"
          title={item.differentEntityNeeds.title}
          description={item.differentEntityNeeds.description}
          accentColor={accent}
        />
      )}

      <CtaBanner variant="inline" data={item.ctaAfterDifferentNeeds} accentColor={accent} />

      {item.painPointsAndSolutions && (
        <SectionBlock
          label="Analysis"
          title={item.painPointsAndSolutions.title}
          description={item.painPointsAndSolutions.intro}
          accentColor={accent}
        >
          <div className="mt-12 space-y-8">
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

      <CtaBanner variant="full" data={item.ctaUrgencyMid} accentColor={accent} />

      <OutcomeSection outcomes={item.outcomes} accentColor={accent} />

      <TestimonialBlock clientRemarks={item.clientRemarks} accentColor={accent} />

      <ContactFormSection ctaWithForm={item.ctaWithForm} accentColor={accent} />

      {/* FAQ can stay as an accordion but inside SectionBlock styling if needed. Left it out of dark mode override initially, let's fix its dark mode. */}
      <div className="bg-[#030303]">
        <FaqAccordion faq={item.faq} accentColor={accent} />
      </div>

      <CtaBanner variant="full" data={item.finalCta} accentColor={accent} />

    </div>
  );
};

export default CaseStudy;
