import React, { useRef, useState } from "react";
import classNames from "classnames";
import { services } from "../../assets";
import Modal from "../../components/shared/modal/Modal";

const MARKETING_TAB = "marketing";
const DESIGNING_TAB = "designing";
const DEVELOPMENT_TAB = "development";
const tabs = [MARKETING_TAB, DEVELOPMENT_TAB, DESIGNING_TAB];

const ServiceCards = (props) => {
  const modalRootRef = useRef(null);
  const [activeTab, setActiveTab] = useState(DEVELOPMENT_TAB);
  const [activeServiceList, setActiveServiceList] = useState(
    services[DEVELOPMENT_TAB],
  );
  const [selectedService, setSelectedService] = useState(null);

  const toggleModalRoot = (service) => {
    setSelectedService(service);
    modalRootRef.current.toggle();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveServiceList(services[tab]);
  };

  return (
    <article>
      <section className="mb-10 flex justify-center">
        <div className="flex justify-between text-[0.6rem] font-medium text-white xs:text-xs md:text-base">
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => handleTabChange(tab)}
              className={classNames(
                "select-none border px-4 py-2 capitalize transition-all duration-200 lg:px-6",
                {
                  "rounded-l-full": index === 0,
                },
                {
                  "rounded-r-full": index === tabs?.length - 1,
                },
                {
                  "cursor-default bg-primary": tab === activeTab,
                },
                {
                  "cursor-pointer bg-black": tab !== activeTab,
                },
              )}
            >
              {tab}
            </span>
          ))}
        </div>
      </section>
      <section
        key={activeTab}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-wrap justify-center gap-10 font-[Poppins]"
      >
        {activeServiceList.map((service, index) => (
          <section
            key={index}
            className="flex w-[340px] flex-col items-center gap-10 rounded-[50px] px-6 py-16 outline outline-1 outline-slate-400 duration-200 hover:-translate-y-2 hover:border-b-4 hover:border-primary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-400"
          >
            <div>
              <img className="w-60" src={service.logo} alt={service.title} />
            </div>
            <div className="space-y-2">
              <h1 className="text-secondary text-center text-lg font-bold capitalize">
                {service.title}
              </h1>
              <p className="text-center text-sm text-slate-600">
                {service.description}
              </p>
            </div>
            <button
              onClick={() => toggleModalRoot(service)}
              className="text-center font-bold text-primary"
            >
              Learn More
            </button>
          </section>
        ))}
      </section>
      <Modal ref={modalRootRef}>
        {selectedService && (
          <>
            <p className="text-lg font-bold text-primary leading-none mb-3">
              {selectedService.learnMore?.intro}
            </p>
            <ul className="list-disc pl-5">
              {selectedService.learnMore?.points.map((point, index) => (
                <li key={index} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-md text-slate-600">
              {selectedService.learnMore?.conclusion}
            </p>
          </>
        )}
      </Modal>
    </article>
  );
};

export default ServiceCards;