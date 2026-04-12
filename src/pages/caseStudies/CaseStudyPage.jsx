import React from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../../assets/json/caseStudies";
import ButtonStyle from "../../components/shared/buttons/ButtonStyle";


const CaseStudyPage = () => {
  return (
    <div id="case-studies" className="min-h-screen bg-white">
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-auto py-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-blue">
              Our Premium
            </p>
            <hr className="py-2 border-t-2 border-black"/>
            <h1 className="text-4xl font-bold md:text-5xl text-primary">
              Case Studies
            </h1>
             <hr className="py-2 border-t-2 mt-2 border-black"/>
            <span className="mx-auto mt-4 max-w-3xl py-10 text-primary-blue-ed md:text-lg">
              Explore how we have helped businesses strengthen digital presence,
              improve communication, and build scalable growth systems.
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies
              .filter((item) => item.isPublished)
              .map((item) => (
                <div
                  key={item.slug}
                  className="relative rounded-2xl border border-gray-200 shadow-2xl transition hover:shadow-md overflow-hidden"
                  style={{ backgroundImage: `url(${item.bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <div className="absolute inset-0 bg-black/60 rounded-2xl" />
                  <div className="relative z-10 p-6">
                  <p className="mb-2 text-sm font-medium text-primary-blue">
                    {item.pageType === "multi-entity-single-client"
                      ? "Multi-Entity Client"
                      : "Single-Entity Client"}
                  </p>

                  <h2 className="text-2xl font-bold text-primary">{item.clientName}</h2>

                  <p className="mt-3 text-primary-blue-ed">{item.hero.tagline}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.services?.slice(0, 3).map((service) => (
                      <span
                        key={service.id}
                        className="rounded-full bg-primary px-3 py-1 text-sm text-white"
                      >
                        {service.title}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <ButtonStyle>
                    <Link
                      to={`/case-studies/${item.slug}`}
                    >
                      View Case Study
                    </Link>
                    </ButtonStyle>
                  </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;