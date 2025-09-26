import React, { useState } from "react";
import { BrandLogo } from "../../assets";

const Navbar = (props) => {
  const { toggleSidebar } = props;
  const [isOpen, setIsOpen] = useState(0);
  const handleOnClick = () => {
    toggleSidebar();
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-[1000] flex w-full items-center justify-between bg-black px-6 shadow-md md:px-12">
      <a href="#hero">
        <img
          className="my-[0.5rem] h-[3rem] cursor-pointer"
          src={BrandLogo}
          alt="YA-logo"
        />
      </a>
      <section>
        <ul className="hidden gap-x-8 text-lg text-white md:flex">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#service">
              Service
            </a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#course">
              Course
            </a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#about">
              About
            </a>
          </li>
        </ul>
        <button onClick={handleOnClick} className="block md:hidden">
          <i
            className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-4xl text-white`}
          ></i>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
