import React from "react";
import {
  Container,
  TeamMobileSwiper,
  TeamDesktopSwiper,
} from "../../components";

const About = () => {
  return (
    <Container>
      <article
        id="about"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-col justify-between gap-y-10 py-16 md:flex-row md:gap-y-0 gap-x-5"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 text-white md:w-[50%]">
          <p className="font-poppins text-base uppercase text-primary">
            CONTACT OUR 
          </p>
          <h3 className="font-poppins text-[24px] font-bold leading-8 md:text-[32px] md:leading-10">
            {"Certified Team Of Experts "}
            <span className="text-primary">To Assist You</span>
          </h3>
          {/* <button className="mb-2 flex w-[50%] items-center justify-center space-x-2 rounded-md bg-white/25 p-2 font-semibold">
            <span>
              <i className="fa-brands fa-whatsapp text-xl text-green-600"></i>
            </span>
            <span>Chat</span>
          </button> */}
        </section>
        <section class="rounded-[15px] bg-[#69696940] backdrop-blur-[10px]">
          <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-10">
            <h2 class="mb-4 text-center text-2xl font-extrabold tracking-tight text-white">
              Contact Us
            </h2>
            <p class="mb-8 text-center font-light  text-gray-400 sm:text-[1rem] lg:mb-5">
              Got an issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" class="space-y-4">
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="focus:ring-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   p-2.5 text-sm  shadow-sm border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border  p-3 text-sm  shadow-sm border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="mb-2 block text-sm font-medium text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  class="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border  p-2.5 text-sm  shadow-sm border-gray-600 bg-gray-700 text-white placeholder-gray-400 resize-none"
                  placeholder="Leave a comment..." 
                ></textarea>
              </div>
              <button
                type="submit"
                className="relative mt-[1rem] w-[100%] max-w-[200px] rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-3 font-semibold text-white shadow-lg transition-all duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-2 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:opacity-100 after:blur-md after:transition-opacity after:duration-300 hover:from-purple-600 hover:to-blue-500 hover:after:opacity-0 md:px-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </article>
    </Container>
  );
};

export default About;
