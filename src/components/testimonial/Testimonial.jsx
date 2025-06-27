import React, { useState } from "react";
import classNames from "classnames";
import { Container } from "../../components";
import { testimonials, QuoteImage, LargeQuoteImage } from "../../assets";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import css from "./Testimonial.module.css";

const CLIENT_TAB = "clients";
const STUDENT_TAB = "students";
const tabs = [CLIENT_TAB, STUDENT_TAB];

const Testimonial = (props) => {
  const [activeTab, setActiveTab] = useState(CLIENT_TAB);
  const [activeTestimonials, setActiveTestimonials] = useState(
    testimonials[CLIENT_TAB],
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveTestimonials(testimonials[tab]);
  };

  return (
    <Container>
      <article
        className={classNames(css.root, "py-16")}
        style={{
          backgroundImage: `url(${LargeQuoteImage})`,
        }}
      >
        <section className="mb-6 flex justify-center">
          <div className="flex justify-between font-medium text-white">
            {tabs.map((tab, index) => (
              <span
                onClick={() => handleTabChange(tab)}
                className={classNames(
                  "select-none border px-4 py-2 capitalize transition-all duration-200 lg:px-6",
                  {
                    "rounded-l-full": index === 0,
                  },
                  {
                    "rounded-r-full": index === tabs?.length - 1,
                  },
                  {
                    "cursor-default bg-primary": tab === activeTab,
                  },
                  {
                    "cursor-pointer bg-black": tab !== activeTab,
                  },
                )}
              >
                {tab}
              </span>
            ))}
          </div>
        </section>
        <section
          key={activeTab}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <h3 className="text-lg font-extrabold uppercase text-black md:text-2xl">
            What Our <span className="text-primary">{activeTab}</span> Say About
            Us
          </h3>
          <div className="mb-10 mt-6 h-[1px] w-full bg-secondary-light bg-opacity-50"></div>
          <Swiper
            loop
            navigation={true}
            className={classNames(css.customSwiper, "flex items-center")}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {activeTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <article className="mx-auto flex w-[80%] flex-col gap-y-2">
                  <section>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-400">
                      <i className="fa-solid fa-user text-3xl"></i>
                    </div>
                  </section>
                  <section className="text-xl font-semibold">
                    {testimonial.name}
                    <br />
                    <span className="text-base">{testimonial.title}</span>
                  </section>
                  <p className="mt-6 text-xl italic">
                    <img
                      src={QuoteImage}
                      alt=""
                      className="relative -top-2.5 inline w-4"
                    />
                    <span>{testimonial.quote}</span>
                    <img
                      src={QuoteImage}
                      alt=""
                      className="relative -top-2.5 inline w-4 rotate-180"
                    />
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </article>
    </Container>
  );
};

export default Testimonial;
