import React, { createContext } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const serverUrl = "http://localhost:8000/";

  const value = {
    serverUrl,
  };
  

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
