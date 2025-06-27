import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      id="flip-card"
      onClick={handleFlip}
      className={`flip-card ${isFlipped ? "" : "flipped"}`}
    >
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <div className="circle-content"></div>

          <div className="font-roboto font-semibold text-white">
            <div className="phone-section">
              <div className="phone-numbers">
                <div>+91 9883952010</div>
                <div>+91 9804569051</div>
              </div>
            </div>

            <div className="email-section">
              <div className="email-address">yafoundations@gmail.com</div>
            </div>
          </div>

          <div className="qr-code"></div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <div className="circle-content"></div>

          <div className="font-roboto font-semibold text-white">
            <div className="phone-section">
              <div className="phone-numbers">
                <div>+91 9883952010</div>
                <div>+91 9804569051</div>
              </div>
            </div>

            <div className="email-section">
              <div className="email-address">yafoundations@gmail.com</div>
            </div>
          </div>

          <div className="qr-code"></div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
