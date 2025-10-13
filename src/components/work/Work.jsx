import React from "react";
import classNames from "classnames";
import { Container } from "../../components";


import css from "./Work.module.css";

const Work = (props) => {
  return (
    <Container>
      <article
        id="about"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-col justify-between gap-6 py-16 md:flex-row"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 text-white md:w-[30%]">
          <h1 className="font-poppins text-[24px] font-bold leading-8 md:text-[35px] md:leading-10">
            <span className="text-primary-blue">Why choose</span>
            <br />
            <span className="text-primary">Young Architects</span>
          </h1>
          <h2 className="mt-[1rem] font-poppins text-[16px] opacity-90 md:text-[18px]">
            Choose <span className="text-primary">Young Architects</span> for a
            client-centric approach where your vision is our priority. We offer
            tailored solutions through{" "}
            <span className="text-primary-blue">deep business analysis</span>,{" "}
            <span className="text-primary-blue">collaborative consultancy</span>
            , and a{" "}
            <span className="text-primary-blue">commitment to perfection</span>.
            With us, you're not just a client —{" "}
            <span className="text-primary">you're family</span>.
          </h2>
        </section>
        <section className="flex w-full flex-wrap items-center justify-center gap-6 md:w-[70%]">
          <img
            className={classNames("w-52", css.pentagonCardCategory2)}
            src="https://youngarchitects.in/assets/image/about-image-1.png"
            alt="Work 1 Description"
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory2)}
            src="https://youngarchitects.in/assets/image/about-image-2.png"
            alt="Work 2 Description"
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory2)}
            src="https://youngarchitects.in/assets/image/about-image-3.png"
            alt="Work 3 Description"
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory1)}
            src="https://youngarchitects.in/assets/image/about-image-4.png"
            alt="Work 4 Description"
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory1)}
            src="https://youngarchitects.in/assets/image/about-image-5.png"
            alt="Work 5 Description"
          />
        </section>
      </article>
    </Container>
  );
};

export default Work;
