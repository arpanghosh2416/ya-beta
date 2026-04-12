import React from "react";
import { useParams, Link } from "react-router-dom";
import { caseDetails } from "../../assets/json/case";

const CaseStudy = () => {
  const { slug } = useParams();
  const item = caseDetails.find((c) => c.slug === slug);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-gray-500">Case study not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div
        className="relative flex h-72 items-end overflow-hidden md:h-96"
        style={{ backgroundColor: item.background, backgroundImage: `url(${item.hero.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 pb-10 md:px-12 lg:px-20">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: item.secondaryColor }}>
            {item.hero.tagline}
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">{item.hero.title}</h1>
          <p className="mt-3 max-w-2xl text-gray-200">{item.hero.subtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 lg:px-0">

        {/* Top CTA */}
        {item.ctaTop && (
          <section className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <p className="mb-4 text-gray-600">{item.ctaTop.note}</p>
            <div className="flex flex-wrap gap-3">
              <Link to={item.ctaTop.primaryLink} className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90">
                {item.ctaTop.primaryLabel}
              </Link>
              <a href={item.ctaTop.secondaryLink} target="_blank" rel="noreferrer" className="rounded-lg border border-primary-blue px-5 py-2 text-sm font-semibold text-primary-blue hover:bg-primary-blue/10">
                {item.ctaTop.secondaryLabel}
              </a>
            </div>
          </section>
        )}

        <hr className="mb-10 border-primary" />

        {/* Multi Entity Service */}
        {item.multiEntityService && (
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-primary">{item.multiEntityService.title}</h2>
            <p className="text-gray-600">{item.multiEntityService.description}</p>
          </section>
        )}

        {/* CTA after service */}
        {item.ctaAfterService && (
          <div className="mb-10 rounded-xl bg-primary/5 p-5">
            <p className="mb-3 text-gray-600">{item.ctaAfterService.text}</p>
            <Link to={item.ctaAfterService.link} className="text-sm font-semibold text-primary hover:underline">
              {item.ctaAfterService.label} →
            </Link>
          </div>
        )}

        <hr className="mb-10 border-primary" />

        {/* Different Entity Needs */}
        {item.differentEntityNeeds && (
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-primary">{item.differentEntityNeeds.title}</h2>
            <p className="text-gray-600">{item.differentEntityNeeds.description}</p>
          </section>
        )}

        {item.ctaAfterDifferentNeeds && (
          <div className="mb-10 rounded-xl bg-primary/5 p-5">
            <p className="mb-3 text-gray-600">{item.ctaAfterDifferentNeeds.text}</p>
            <Link to={item.ctaAfterDifferentNeeds.link} className="text-sm font-semibold text-primary hover:underline">
              {item.ctaAfterDifferentNeeds.label} →
            </Link>
          </div>
        )}

        <hr className="mb-10 border-primary" />

        {/* Pain Points & Solutions */}
        {item.painPointsAndSolutions && (
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-primary">{item.painPointsAndSolutions.title}</h2>
            <p className="mb-6 text-gray-600">{item.painPointsAndSolutions.intro}</p>
            <div className="space-y-6">
              {item.painPointsAndSolutions.entities.map((entity, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-5">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary-blue">{entity.category}</p>
                  <h3 className="mb-3 text-lg font-bold text-primary">{entity.entityName}</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase text-gray-400">Pain Point</p>
                      <p className="text-gray-600">{entity.painPoint}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase text-gray-400">Solution</p>
                      <p className="text-gray-600">{entity.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <hr className="mb-10 border-primary" />

        {/* Outcomes */}
        {item.outcomes && (
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-primary">{item.outcomes.title}</h2>
            <p className="mb-4 text-gray-600">{item.outcomes.summary}</p>
            <ul className="space-y-2">
              {item.outcomes.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1 text-primary">✓</span> {point}
                </li>
              ))}
            </ul>
          </section>
        )}

        <hr className="mb-10 border-primary" />

        {/* Client Remarks */}
        {item.clientRemarks && (
          <section className="mb-10 rounded-2xl border-l-4 border-primary bg-gray-50 p-6">
            <p className="mb-4 text-lg italic text-gray-700">"{item.clientRemarks.quote}"</p>
            <p className="font-semibold text-primary">{item.clientRemarks.author}</p>
            <p className="text-sm text-gray-500">{item.clientRemarks.designation}</p>
          </section>
        )}

        {/* FAQ */}
        {item.faq?.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-primary">FAQs</h2>
            <div className="space-y-4">
              {item.faq.map((f, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-5">
                  <p className="mb-2 font-semibold text-primary-blue">{f.question}</p>
                  <p className="text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        {item.finalCta && (
          <section className="mb-10 rounded-2xl bg-primary p-8 text-white">
            <h2 className="mb-3 text-2xl font-bold">{item.finalCta.title}</h2>
            <p className="mb-2 text-white/80">{item.finalCta.description}</p>
            <p className="mb-5 text-sm text-white/60">{item.finalCta.urgencyText}</p>
            <Link to={item.finalCta.link} className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-gray-100">
              {item.finalCta.label}
            </Link>
          </section>
        )}

        <Link to="/case-studies" className="text-sm font-semibold text-primary-blue hover:underline">
          ← Back to Case Studies
        </Link>

      </div>
    </div>
  );
};

export default CaseStudy;
