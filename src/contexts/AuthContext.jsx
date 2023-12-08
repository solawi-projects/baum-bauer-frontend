/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, useReducer } from "react";
import { paymentSessionReducer } from "../reducers/reducers";
import { patronReducer } from "../reducers/reducers";
/*
    create a context for user Info
*/
export const AuthContext = createContext({});

// our auth context provider
export const AuthProvider = ({ children }) => {
  // stripe session id
  const stripSessionValue = JSON.parse(localStorage.getItem("ssid"));
  const [stripeSession, handleStripeSession] = useReducer(
    paymentSessionReducer,
    {
      sid: stripSessionValue.stripeSession.sid
        ? stripSessionValue.stripeSession.sid
        : "",
    }
  );
  useEffect(() => {
    localStorage.setItem("ssid", JSON.stringify({ stripeSession }));
  }, [stripeSession]);

  // patron details

  // const patronDataValue = JSON.parse(localStorage.getItem("patron"));
  const patronDataValue = JSON.parse(localStorage.getItem("patron"));
  console.log("PT:", patronDataValue.patron.patronInfo);
  const [patron, handlePatronInfo] = useReducer(patronReducer, {
    patronInfo: patronDataValue.patron.patronInfo
      ? patronDataValue.patron.patronInfo
      : {},
  });
  console.log("VALUE", patron.patronInfo);
  console.log("Patron LSTRG");
  useEffect(() => {
    localStorage.setItem("patron", JSON.stringify({ patron }));
  }, [patron]);

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
      value={{
        loggedIn,
        setLoggedIn,
        authUser,
        setAuthUser,
        stripeSession,
        handleStripeSession,
        patron,
        handlePatronInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
