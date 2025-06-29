import React from "react";
import { HeroImage } from "../../assets";
import { Container, FlipCard } from "../../components";
import BookConsultationLink from "../BookConsultation/BookConsultationLink";

const Hero = (props) => {
  return (
    <Container>
      <article
        id="hero"
        className="m-auto flex w-[90%] flex-col justify-between gap-6 pb-16 pt-[8rem] sm:w-[100%] md:flex-row"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 text-white md:w-[40%]">
          <h1 className="font-poppins text-[24px] font-bold leading-8 md:text-[35px] md:leading-10">
            <span className="text-primary-blue">Welcome to</span> <br />
            <span className="capitalize text-primary">YOUNG ARCHITECTS</span>
          </h1>
          <h2 className="mt-[1rem] font-poppins text-[16px] opacity-90 md:text-[18px]">
            Young Architects is a dynamic IT virtual business redefining the
            technology landscape. With talent, expertise and commitment to
            excellence, we aim scale your business digitally with latest
            technologies and AI.
          </h2>
          <BookConsultationLink />{" "}
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
