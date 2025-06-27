import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { works } from "../../assets";
import { Modal } from "../../components";
import DesigningComponent from "./Designing/DesigningComponent";
import MarketingComponent from "./Marketing/MarketingComponent";
import css from "./product.module.css";
import VanillaTilt from "vanilla-tilt";

const MARKETING_TAB = "marketing";
const DESIGNING_TAB = "designing";
const DEVELOPMENT_TAB = "development";
const tabs = [MARKETING_TAB, DEVELOPMENT_TAB, DESIGNING_TAB];

const ProductCards = () => {
  const modalRootRef = useRef(null);
  const [activeTab, setActiveTab] = useState(DEVELOPMENT_TAB);
  const [activeServiceList, setActiveServiceList] = useState(
    works[DEVELOPMENT_TAB] || []
  );

  useEffect(() => {
    const tiltElements = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(tiltElements, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, [activeTab]);

  const toggleModalRoot = () => {
    modalRootRef.current?.toggle();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveServiceList(works[tab] || []);
  };

  return (
    <article>
      {/* Tabs Section */}
      <section className="mb-10 flex justify-center">
        <div className="flex justify-between text-[0.6rem] font-medium text-white xs:text-xs md:text-base">
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => handleTabChange(tab)}
              className={classNames(
                "select-none border px-4 py-2 capitalize transition-all duration-200 lg:px-6",
                index === 0 ? "rounded-l-full" : "",
                index === tabs.length - 1 ? "rounded-r-full" : "",
                tab === activeTab ? "cursor-default bg-primary" : "cursor-pointer bg-black hover:bg-gray-800"
              )}
            >
              {tab}
            </span>
          ))}
        </div>
      </section>

      {/* Active Tab Content */}
      {activeTab === DEVELOPMENT_TAB && (
        <section
          key={activeTab}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          className="flex flex-wrap justify-center gap-10 font-[Poppins]"
        >
          {activeServiceList.length > 0 ? (
            activeServiceList.map((service, index) => (
              <div
                key={index}
                data-tilt
                data-tilt-reverse="true"
                className={classNames(css.card, "card-3d hover:shadow-lg transition-all duration-300")}
              >
                <div className="overflow-hidden">
                  <img className="w-full rounded-tl-[15px] rounded-tr-[15px] cardImage h-[100%] object-cover" src={service?.logo} alt={service.title} />
                </div>
                <div className={css.cardText}>
                  <h2 className="font-bold text-lg">{service.title}</h2>
                  <p className="mt-5 text-sm text-gray-700">{service.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No services available.</p>
          )}
        </section>
      )}

      {activeTab === MARKETING_TAB && <MarketingComponent />}
      {activeTab === DESIGNING_TAB && <DesigningComponent />}
    </article>
  );
};

export default ProductCards;
