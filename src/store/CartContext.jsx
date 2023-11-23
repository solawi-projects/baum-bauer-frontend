import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartTrees, setCartTrees] = useState([]);

  useEffect(() => {
    if (cartTrees?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartTrees));
    }
  }, [cartTrees]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartTrees(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addTree(treeId) {
    setCartTrees((prev) => [...prev, treeId]);
  }

  function removeTree(treeId) {
    setCartTrees((prev) => {
      const pos = prev.indexOf(treeId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  const removeButton = (treeId) => {
    setCartTrees((prevCart) => prevCart.filter((id) => id !== treeId));
  };

  function clearCart() {
    setCartTrees([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartTrees,
        setCartTrees,
        addTree,
        removeTree,
        removeButton,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
