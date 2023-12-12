/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, useReducer } from "react";
import {
  paymentSessionReducer,
  patronReducer,
  calculateGrandPrice,
  OrderItemsReducer,
} from "../reducers/reducers";

/*
    create a context for user Info
*/
export const AuthContext = createContext({});

// our auth context provider
export const AuthProvider = ({ children }) => {
  const lsRef = typeof window !== "undefined" ? window.localStorage : null;
  //receiving the login information from local storage
  const loginSession = JSON.parse(lsRef.getItem("login")) || {
    loggedIn: false,
    authUser: {},
  };

  const [loggedIn, setLoggedIn] = useState(loginSession.loggedIn);
  const [authUser, setAuthUser] = useState(loginSession.authUser);

  // it will be called any time that the (loggedIn and authUser) changed
  useEffect(() => {
    lsRef.setItem(
      "login",
      JSON.stringify({ loggedIn: loggedIn, authUser: authUser })
    );
  }, [loggedIn, authUser]);

  // stripe session id
  const stripSessionValue = JSON.parse(lsRef.getItem("ssid"));
  const [stripeSession, handleStripeSession] = useReducer(
    paymentSessionReducer,
    {
      sid: stripSessionValue.stripeSession.sid
        ? stripSessionValue.stripeSession.sid
        : "",
    }
  );
  useEffect(() => {
    lsRef?.setItem("ssid", JSON.stringify({ stripeSession }));
  }, [stripeSession]);

  // patron details

  const patronDataValue = JSON.parse(lsRef.getItem("patron"));
  const [patron, handlePatronInfo] = useReducer(patronReducer, {
    patronInfo: patronDataValue.patron.patronInfo
      ? patronDataValue.patron.patronInfo
      : {},
  });
  useEffect(() => {
    lsRef.setItem("patron", JSON.stringify({ patron }));
  }, [patron]);

  // calculate total grand price
  const grandValue = JSON.parse(lsRef.getItem("orderGrandPrice"));
  const [orderGrandPrice, handleOrderGrandPrice] = useReducer(
    calculateGrandPrice,
    {
      grand: grandValue.orderGrandPrice.grand
        ? grandValue.orderGrandPrice.grand
        : 0.0,
    }
  );
  useEffect(() => {
    lsRef.setItem("orderGrandPrice", JSON.stringify({ orderGrandPrice }));
  }, [orderGrandPrice]);

  // save payment
  const orderValue = JSON.parse(lsRef.getItem("items"));
  const [order, handleOrder] = useReducer(OrderItemsReducer, {
    items: orderValue.order.items ? orderValue.order.items : {},
  });
  useEffect(() => {
    lsRef.setItem("items", JSON.stringify({ order }));
  }, [order]);

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
        orderGrandPrice,
        handleOrderGrandPrice,
        order,
        handleOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
