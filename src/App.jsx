import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { RootProvider } from "./contexts/RootContext";

const App = (props) => {
  return (
    <RootProvider>
      <Header />
      <Outlet />
      <Footer />
    </RootProvider>
  );
};

export default App;
