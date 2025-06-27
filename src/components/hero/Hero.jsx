import React from "react";
import { HeroImage } from "../../assets";
import { Container, FlipCard } from "../../components";
import BookConsultationButton from "../BookConsultation/BookConsultationButton";

const Hero = (props) => {
  return (
    <Container>
      <article
        id="hero"
        className="flex flex-col justify-between gap-6 pt-[8rem] pb-16 md:flex-row w-[90%] sm:w-[100%] m-auto"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 text-white md:w-[40%]">
          <h1 className="font-poppins text-[24px] font-bold leading-8 md:text-[35px] md:leading-10">
            <span className="text-primary-blue">Welcome to</span>{" "}
            <br />
            <span className="text-primary capitalize">YOUNG ARCHITECTS</span>
          </h1>
          <h2 className="font-poppins text-[16px] opacity-90 md:text-[18px] mt-[1rem]">
            Young Architects is a dynamic IT virtual business redefining the technology landscape. With talent, expertise and commitment to excellence, we aim scale your business digitally with latest technologies and AI.
          </h2>
          <BookConsultationButton/> {" "}
        </section>
        <section className="flex w-full justify-center md:w-[60%]">
          {/* <img src={HeroImage} alt="hero-image" /> */}
          <FlipCard />
        </section>
      </article>
    </Container>
  );
};

export default Hero;
