import React, { createContext, useState } from "react";

// @ts-ignore
export const LoginContext = createContext();

const ContextProvider = ({ children }) => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <LoginContext.Provider
        // @ts-ignore
        value={{
          // @ts-ignore
          display,
          setDisplay,
        }}
      >
        {children}
      </LoginContext.Provider>
    </>
  );
};

export default ContextProvider;
