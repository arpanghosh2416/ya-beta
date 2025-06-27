import React, { useState } from "react";
import { BrandLogo } from "../../assets";

const Navbar = (props) => {
  const { toggleSidebar } = props;
  const [isOpen, setIsOpen] = useState(0); 
  const handleOnClick = ()=>{
    toggleSidebar(); 
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 z-[1000] w-full bg-black px-6 md:px-12 shadow-md">
      <a href="#hero">
        <img className="h-[3rem] my-[0.5rem] cursor-pointer" src={BrandLogo} alt="YA-logo" />
      </a>
      <section>
        <ul className="hidden gap-x-8 text-lg text-white md:flex">
          {/* <li>
            <a href="#">Home</a>
          </li> */}
          <li>
            <a className="hover:text-primary-blue" href="#service">Service</a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#work">Work</a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#course">Course</a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#about">About</a>
          </li>
        </ul>
        <button onClick={handleOnClick} className="block md:hidden">
          <i className={`fa-solid  ${isOpen ? "fa-xmark" : "fa-bars"} text-4xl text-white`}></i>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
