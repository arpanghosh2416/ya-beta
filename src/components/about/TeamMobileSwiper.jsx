import React from "react";
import { team } from "../../assets";
import { Work1stImage } from "../../assets";

// import required modules
import { EffectCards } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import css from "./TeamMobileSwiper.module.css";

const TeamMobileSwiper = (props) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className={css.swiper}
    >
      {team.map((member) => {
        return (
          <SwiperSlide
            key={member.image}
            className="outline-3 rounded-xl outline outline-white"
          >
            <div className="group relative h-full w-full">
              <div className="absolute -bottom-32 flex h-full w-full flex-col justify-end bg-black/60 p-4 font-[Roboto] opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <h1 className="text-xl font-bold text-teal-500">
                  {member.name}
                </h1>
                <span className="text-xs text-white">{member.description}</span>
              </div>
              <img
                src={Work1stImage}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TeamMobileSwiper;
