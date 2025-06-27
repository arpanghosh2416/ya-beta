import React, { useState } from "react";
import { works } from "../../../assets";
import styles from "./MarketingComponent.module.css";
import logo from "../../../assets/image/logo2.png";

const MarketingComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeInfo, setActiveInfo] = useState({
    title: "Instagram Marketing",
    description:
      "doloribus neque excepturi perferendis aspernatur, commodi inventore",
    longDescription: "This is long description",
    logo: "https://yateam.vercel.app/static/media/im.f09b99d7e1997ffc9e61.png",
    img: "/workImage/Marketing1.png",
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
      <div className="h-[60vh] md:h-[80vh] w-full rounded-md relative ">
        <img
          src={activeInfo.img}
          alt="bg"
          className={`h-full w-full rounded-md  transition-all duration-300 ${imgAnim ? styles.zoomAnimation : ""} brightness-[0.5]`}
        />
        <div className="absolute top-0 left-0 flex flex-col items-start justify-top h-full w-full rounded-md p-10">
          <h1 className={`text-white text-[2rem] transition-opacity duration-300 ${textAnim ? styles.fadeAnimation : ""}`}>{activeInfo.title}</h1>
          <p className={`text-white transition-opacity duration-300 ${textAnim ? styles.fadeAnimation : ""}`}>{activeInfo.description}</p>
          {/* <p className={`text-white transition-opacity duration-300 ${textAnim ? styles.fadeAnimation : ""}`}>{activeInfo.longDescription}</p> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-2 md:gap-5 p-4">
        {works.marketing.map((panel, index) => (
          <div
            key={index}
            className={`bg-black/50  ${styles.card} ${activeIndex === index ? "border-2 border-white border-solid" : ""}`}
            style={{ backgroundImage: `url(${logo})` }}
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