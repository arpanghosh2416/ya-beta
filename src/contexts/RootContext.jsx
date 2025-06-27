import { createContext } from "react";

const RootContext = createContext({});

export const RootProvider = ({ children }) => {
  return <RootContext.Provider value={{}}>{children}</RootContext.Provider>;
};

export default RootContext;
