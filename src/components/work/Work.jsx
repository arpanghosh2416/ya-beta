import React from "react";
import classNames from "classnames";
import { Container } from "../../components";
import {
  Work1stImage,
  Work2ndImage,
  Work3rdImage,
  Work4thImage,
  Work5thImage,
} from "../../assets";

import css from "./Work.module.css";

const Work = (props) => {
  return (
    <Container>
      <article
        id="work"
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
          <h2 className="font-poppins  mt-[1rem] text-[16px] opacity-90 md:text-[18px]">
          Choose <span className="text-primary">Young Architects</span> for a client-centric approach where your vision is our priority. We offer tailored solutions through <span className="text-primary-blue">deep business analysis</span>, <span className="text-primary-blue">collaborative consultancy</span>, and a <span className="text-primary-blue">commitment to perfection</span>. With us, you're not just a client — <span className="text-primary">you're family</span>.
          </h2>
        </section>
        <section className="flex w-full flex-wrap items-center justify-center gap-6 md:w-[70%]">
          <img
            className={classNames("w-52", css.pentagonCardCategory2)}
            src={Work1stImage}
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory2)}
            src={Work2ndImage}
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory2)}
            src={Work3rdImage}
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory1)}
            src={Work4thImage}
          />
          <img
            className={classNames("w-52", css.pentagonCardCategory1)}
            src={Work5thImage}
          />
        </section>
      </article>
    </Container>
  );
};

export default Work;
