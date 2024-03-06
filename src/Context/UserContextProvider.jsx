import React, { createContext, useState } from "react";

// Create the context object
const UserContext = createContext();

// Create the provider component
const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  console.log(userData)

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider }; 
