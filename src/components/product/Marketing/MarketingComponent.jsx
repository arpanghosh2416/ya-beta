import React, { useState } from "react";
import { works } from "../../../assets";
import styles from "./MarketingComponent.module.css";

const MarketingComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeInfo, setActiveInfo] = useState({
    title: "Instagram Marketing",
    description:
      "These are some marketing insights of this company which has had a digital business for over 5 years but started SEO for only 2 months and this is the result already.",
    longDescription: "This is long description",
    logo: "https://youngarchitects.in/assets/clientLogo/iwallp.png",
    img: "https://youngarchitects.in/assets/workImage/Marketing1.png",
  });

  const [imgAnim, setImgAnim] = useState(false);
  const [textAnim, setTextAnim] = useState(false);

  const handleCardClick = (index, panel) => {
    if (index === activeIndex) return;
    setImgAnim(true);
    setTextAnim(true);
    setTimeout(() => {
      setActiveIndex(index);
      setActiveInfo({ ...panel });
      setImgAnim(false);
      setTextAnim(false);
    }, 300); // Duration matches CSS animation
  };

  return (
    <div
      className="marketingContainer relative"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
    >
      <div className="relative h-[60vh] w-full rounded-md md:h-[80vh]">
        <img
          src={activeInfo.img}
          alt="bg"
          className={`h-full w-full rounded-md transition-all duration-300 ${imgAnim ? styles.zoomAnimation : ""} brightness-[0.5]`}
        />
        <div className="justify-top absolute left-0 top-0 flex h-full w-full flex-col items-start rounded-md p-10">
          <h1
            className={`text-[2rem] text-white transition-opacity duration-300 ${textAnim ? styles.fadeAnimation : ""}`}
          >
            {activeInfo.title}
          </h1>
          <p
            className={`text-white transition-opacity duration-300 ${textAnim ? styles.fadeAnimation : ""}`}
          >
            {activeInfo.description}
          </p>
          
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-2 p-4 md:gap-5">
        {works.marketing.map((panel, index) => (
          <div
            key={index}
            className={`bg-black/50 ${styles.card} ${activeIndex === index ? "border-2 border-solid border-white" : ""}`}
            style={{ backgroundImage: `url(${panel.logo})` }}
            onClick={() => handleCardClick(index, panel)}
          >
            <div className={styles.overlay}>
              <h3>{panel.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingComponent;
