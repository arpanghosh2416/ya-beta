import React from "react";
import { Container } from "../../components";

const About = () => {
  return (
    <Container>
      <article
        id="contact"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-col justify-between gap-x-5 gap-y-5 py-5 md:flex-row md:gap-y-0"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 text-white md:w-[50%]">
          <span className="font-poppins text-base uppercase text-primary">
            <strong>CONTACT OUR</strong>
          </span>
          <h3 className="font-poppins text-[24px] font-bold leading-8 md:text-[32px] md:leading-10">
            {"Certified Team Of Experts "}
            <span className="text-primary-blue">To Assist You</span>
          </h3>
        </section>

        <div data-aos="fade-up" className="relative lg:!w-[110%]">
          <iframe
            src="https://link.youngarchitects.in/widget/form/7uTzoLAsqIHpgFaLOm2y"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "3px",
            }}
            id="inline-7uTzoLAsqIHpgFaLOm2y"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="YA Website Contact Form - Copy"
            data-height="956"
            data-layout-iframe-id="inline-7uTzoLAsqIHpgFaLOm2y"
            data-form-id="7uTzoLAsqIHpgFaLOm2y"
            title="YA Website Contact Form - Copy"
            loading="lazy"
          ></iframe>
        </div>
      </article>
    </Container>
  );
};

export default About;
