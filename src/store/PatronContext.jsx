// PatronContext.js
import React, { createContext, useState, useContext } from "react";

const PatronContext = createContext();

export const usePatronContext = () => {
  const context = useContext(PatronContext);
  if (!context) {
    throw new Error("usePatronContext must be used within a PatronProvider");
  }
  return context;
};

export const PatronProvider = ({ children }) => {
  const [newPatron, setNewPatron] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    address: {
      city: "",
      zipCode: "",
      country: "",
      state: "",
      address1: "",
      address2: "",
    },
    userId: "",
  });

  const updateNewPatron = (newValues) => {
    setNewPatron((prevPatron) => ({
      ...prevPatron,
      ...newValues,
    }));
  };

  return (
    <PatronContext.Provider value={{ newPatron, updateNewPatron }}>
      {children}
    </PatronContext.Provider>
  );
};
