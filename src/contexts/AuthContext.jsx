/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

/*
    create a context for user Info
*/
export const AuthContext = createContext({});

// our auth context provider
export const AuthProvider = ({ children }) => {
  //receiving the login information from local storage
  const loginSession = JSON.parse(localStorage.getItem("login")) || {
    loggedIn: false,
    email: "",
  };

  const [loggedIn, setLoggedIn] = useState(loginSession.loggedIn);
  const [email, setEmail] = useState(loginSession.email);

  // it will be called any time that the (loggedIn and email) changed
  useEffect(() => {
    localStorage.setItem(
      "login",
      JSON.stringify({ loggedIn: loggedIn, email: email })
    );
  }, [loggedIn, email]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
