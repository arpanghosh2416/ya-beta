import React, { useRef } from "react";
import { Container, Navbar, SidebarMaybe } from "../../components";

const Header = (props) => {
  const sidebarMaybeRef = useRef(null);

  const toggleSidebar = () => {
    sidebarMaybeRef.current.toggle();
  };

  return (
    <header className="bg-black">
      <Container>
        <SidebarMaybe ref={sidebarMaybeRef} />
        <Navbar toggleSidebar={toggleSidebar} />
      </Container>
    </header>
  );
};

export default Header;
