import React from "react";
import {
  Container,
  TeamMobileSwiper,
  TeamDesktopSwiper,
} from "../../components";


const whatsAppNumber = "+919883952010";

const Acheivement = () => {
  return (
    <Container>
      <article
        id="acheivement"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-col justify-between gap-y-10 py-16 md:flex-row md:gap-y-0"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 md:w-[30%]">
          <p className="font-poppins text-base uppercase text-primary-blue-ed">
            Our Acheivement
          </p>
          <h3 className="font-poppins text-[24px] font-bold leading-8 md:text-[32px] md:leading-10">
            {"Check our "}
            <span className="text-primary-blue-ed">best students'</span>
            {" achievements"}
          </h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            href={`https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${encodeURIComponent(
              `Hello! I found your education details on Young Architects Website`,
            )}`}
            className="mb-2 flex w-[50%] items-center justify-center space-x-2 rounded-md bg-black/75 p-2 font-semibold"
          >
            <span>
              <i className="fa-brands fa-whatsapp text-xl text-green-600"></i>
            </span>
            <span className="text-white">Chat</span>
          </a>
        </section>
        <section className="w-full md:w-[70%]">
          <TeamMobileSwiper />
          <TeamDesktopSwiper />
        </section>
      </article>
    </Container>
  );
};

export default Acheivement;
