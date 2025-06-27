import React, { useRef, useImperativeHandle } from "react";

const SidebarMaybe = (props, ref) => {
  const sidebarRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggle: () => {
      sidebarRef.current?.classList.toggle("translate-y-[-160px]");
      sidebarRef.current?.classList.toggle("opacity-100");
      if (sidebarRef.current?.classList.contains("opacity-100")) {
        sidebarRef.current.classList.remove("z-[-1]");
        sidebarRef.current.classList.add("z-[2]");
      } else {
        sidebarRef.current.classList.remove("z-[2]");
        sidebarRef.current.classList.add("z-[-1]");
      }
    },
  }));

  return (
    <section
      ref={sidebarRef}
      className="fixed right-[1rem] top-[250px] z-[-1] w-[40%] max-w-[200px] h-[20vh] min-h-[250px] bg-[#5d5c5ca1] duration-300 sm:w-[60%] md:hidden opacity-0 backdrop-blur-[5px] rounded-[10px] shadow-lg backdrop-brightness-50"
    >
      <ul className="md:hidden text-[1.5rem] text-white flex flex-col justify-center items-center h-full w-full gap-[1rem]">
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
    </section>
  );
};

export default React.forwardRef(SidebarMaybe);