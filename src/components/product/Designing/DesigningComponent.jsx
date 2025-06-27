import React, { useState } from "react";
import { works } from "../../../assets";
import "./DesigningComponent.css";

const DesigningComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="designContainer" data-aos="fade-up"
    data-aos-delay="100"
    data-aos-duration="600">
      {works.designing.map((panel, index) => (
        <div
          key={index}
          className={`panel ${index === activeIndex ? "active" : ""} shadow-md`}
          style={{ backgroundImage: `url(${panel?.logo})` }}
          onClick={() => setActiveIndex(index)}
        >
          <h3 className="bg-black bg-opacity-50 backdrop-blur-[10px] p-4 rounded-[50px] shadow-md">{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default DesigningComponent;
