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
    authUser: {},
  };

  const [loggedIn, setLoggedIn] = useState(loginSession.loggedIn);
  const [authUser, setAuthUser] = useState(loginSession.authUser);

  // it will be called any time that the (loggedIn and authUser) changed
  useEffect(() => {
    localStorage.setItem(
      "login",
      JSON.stringify({ loggedIn: loggedIn, authUser: authUser })
    );
  }, [loggedIn, authUser]);

  return (
    <AuthContext.Provider
      value={{ loggedIn, setLoggedIn, authUser, setAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
