import React from "react";


const AcheivementCard = ({
  name = "Default name",
  imageSrc = "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
}) => {
  return (
    <div className="relative mx-auto h-[80vh] w-full max-w-[400px] overflow-hidden rounded-[10px] bg-black bg-opacity-50 p-5 text-center shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <img
            src="/tcs-logo.png"
            alt="TCS Logo"
            className="h-[50px] w-[50px]"
          />
          <img
            src="/brainiacs-logo.png"
            alt="Brainiacs Logo"
            className="h-[50px] w-[50px]"
          />
          <img
            src="/zolo-logo.png"
            alt="Zolo Logo"
            className="h-[50px] w-[50px]"
          />
        </div>
        <div className="absolute right-[-25px] top-[-30px]">
          <img src="https://youngarchitects.in/assets/image/logo2.png" alt="YA logo" width="200px" height="200px" />
        </div>
      </div>
      <div className="absolute right-0 top-0 h-[70%] w-[200px] overflow-hidden rounded-[10px]">
        <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-5">
        <p className="font-bold text-[#333]">
          Heartiest Congratulations to {name}, student of IEM, BCA department
          who has got three jobs in these respective companies as mentioned
          above (via on-campus). She has taken training from our training cell
          and has achieved the impossible. We aspired her to be the best version
          of herself.
        </p>
      </div>
    </div>
  );
};

export default AcheivementCard;
