import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = (props) => {
  const { toggleSidebar } = props;
  const [isOpen, setIsOpen] = useState(0);
  const handleOnClick = () => {
    toggleSidebar();
    setIsOpen(!isOpen);
  };

    const navItems = [
    { link: "#home", label: "Home" },
    { link: "#services", label: "Our Services" },
    { link: "#about", label: "About Us" },
    { link: "#work", label: "Our Works" },
    { link: "#course", label: "Upskill Courses" },
    { link: "#contact", label: "Contact Us" },
    
  ];

  return (
    <nav className="fixed left-0 top-0 z-[1000] flex w-full items-center justify-between bg-black px-6 shadow-md md:px-12">
      <HashLink smooth to="#home">
        <img
          className="my-[0.5rem] h-[3rem] cursor-pointer"
          src="https://youngarchitects.in/assets/logo/brandlogo.png"
          alt="Young-Architects"
        />
      </HashLink>
      <section>
        <ul className="hidden gap-x-8 text-lg text-white md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <HashLink smooth to={item.link}
                className="block px-3 py-1 text-lg font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 hover:text-blue-400 focus:rounded focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>
        {/* <ul className="hidden gap-x-8 text-lg text-white md:flex">
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
        </ul> */}
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
