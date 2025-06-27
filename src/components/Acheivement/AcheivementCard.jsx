import React from "react";
import {logo2} from "../../assets";

const AcheivementCard = ({
  name = "Default name",
  imageSrc = "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
}) => {
  return (
    <div className="w-full h-[80vh] max-w-[400px] mx-auto bg-black bg-opacity-50 shadow-md rounded-[10px] p-5 relative text-center overflow-hidden ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img
            src="/tcs-logo.png"
            alt="TCS Logo"
            className="w-[50px] h-[50px]"
          />
          <img
            src="/brainiacs-logo.png"
            alt="Brainiacs Logo"
            className="w-[50px] h-[50px]"
          />
          <img
            src="/zolo-logo.png"
            alt="Zolo Logo"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="absolute top-[-30px] right-[-25px]">
          <img src={logo2} alt="YA logo" width="200px" height="200px" />
        </div>
      </div>
      <div className="absolute w-[200px] h-[70%] rounded-[10px] overflow-hidden right-0 top-0">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
      </div>
      <div className="mt-5">
        <p className="text-[#333] font-bold">
          Heartiest Congratulations to {name}, student of IEM, BCA department
          who has got three jobs in these respective companies as mentioned
          above (via on-campus). She has taken training from our training cell
          and has achieved the impossible. We aspired her to be the best
          version of herself.
        </p>
      </div>
    </div>
  );
};

export default AcheivementCard;
