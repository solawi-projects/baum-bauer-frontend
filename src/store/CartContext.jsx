import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartTrees, setCartTrees] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // Function to count occurrences of a specific tree ID in cartTrees
  const getTreeQuantity = (treeId) => {
    return cartTrees.filter((id) => id === treeId).length;
  };

  // Calculate the total price for each item
  const getItemTotalPrice = (tree) => {
    const quantity = getTreeQuantity(tree._id);
    return quantity * parseFloat(tree.price.$numberDecimal);
  };

  // Calculate the overall total price
  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, tree) => {
      return total + getItemTotalPrice(tree);
    }, 0);
  };

  // Tax rate is 5%
  const TAX_RATE = 0.05;

  // Calculate the overall total price including tax
  const calculateGrandTotal = () => {
    // Calculate total price without tax
    const totalPriceWithoutTax = calculateTotalPrice();

    // Calculate tax based on the total price
    const totalTax = totalPriceWithoutTax * TAX_RATE;

    // Calculate grand total by adding total price and tax
    const grandTotal = totalPriceWithoutTax + totalTax;

    return grandTotal;
  };

  // Modified addTree function to include available quantity check
  const handleAddTree = (tree) => {
    const treeQuantityInCart = getTreeQuantity(tree._id);
    if (treeQuantityInCart < tree.availableQuantity) {
      addTree(tree._id);
    } else {
      alert(
        `Cannot add more ${tree.name}. Maximum available: ${tree.availableQuantity}`
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cartTrees.length > 0) {
          setLoading(true);

          const response = await axios.post(
            "http://localhost:4000/api/tree/cart",
            { ids: cartTrees }
          );

          setCartProducts(response.data);
          setLoading(false);
        } else {
          setCartProducts([]);
        }
      } catch (error) {
        console.error("Error fetching cart products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [cartTrees]);

  return (
    <CartContext.Provider
      value={{
        cartTrees,
        cartProducts,
        loading,
        setCartTrees,
        addTree,
        removeTree,
        removeButton,
        clearCart,
        getTreeQuantity,
        TAX_RATE,
        getItemTotalPrice,
        calculateTotalPrice,
        calculateGrandTotal,
        handleAddTree,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
