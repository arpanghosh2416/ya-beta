import classNames from "classnames";
import { students} from "../../assets";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import css from "./TeamDesktopSwiper.module.css";

const TeamDesktopSwiper = (props) => {
  return (
    <div className="slider-ud hidden w-full md:block">
      <Swiper
        loop
        spaceBetween={6}
        navigation={window.screen.width > 576 ? true : false}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        className="swiperjs-slider-ud"
      >
        {students?.map((student) => {
          return (
            <SwiperSlide
              key={student.name}
              className="overflow-hidden rounded-xl"
            >
              <div
                style={{ "--background-image": `url(${student.image})` }}
                className={classNames(
                  css.slide,
                  `h-[480px] w-full overflow-hidden rounded-xl before:hover:scale-125 xs:h-[320px] sm:h-[360px]`,
                )}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex justify-end px-1.5 py-3">
                    <div className="text-primary-blue-ed rounded-full bg-black/30 px-2 py-0.5 pt-1 font-semibold backdrop-blur-lg xs:text-[10.5px] sm:text-[12.5px]">
                      {student.role}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="mb-3 px-1 text-white">
                      <h1 className="text-primary-blue-ed w-[80%] truncate text-xs">
                        {student.description}
                      </h1>
                      <h1 className="text-primary-blue-ed truncate text-[0.79rem] font-medium sm:text-xl">
                        {student.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamDesktopSwiper;
