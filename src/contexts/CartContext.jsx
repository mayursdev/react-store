import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => {},
  addProductToCart: () => {},
  subtractProductFromCart: () => {},
  removeProductFromCart: () => {},
  cartCount: 0,
  cartSubTotal: 0,
  isMiniCartOpen: false,
  setIsMiniCartOpen: () => {},
});

const CartProvider = (props) => {
  const { children } = props;
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  useEffect(() => {
    const newCartCount = cartProducts.reduce((acc, curr) => {
      return curr.quantity + acc;
    }, 0);

    const newCartSubTotal = cartProducts.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);

    setCartCount(newCartCount);
    setCartSubTotal(newCartSubTotal);
  }, [cartProducts]);

  const addProductToCart = (productToAdd) => {
    let newCartProducts = [];

    const productAlreadyExists = cartProducts.find(
      (product) => product.id === productToAdd.id
    );

    if (productAlreadyExists) {
      newCartProducts = cartProducts.map((product) => {
        if (product.id === productToAdd.id)
          return { ...product, quantity: product.quantity + 1 };
        else return product;
      });
    } else {
      newCartProducts = [...cartProducts, { ...productToAdd, quantity: 1 }];
    }

    setCartProducts(newCartProducts);
  };

  const subtractProductFromCart = (productToSubtract) => {
    let newCartProducts = cartProducts.map((product) => {
      if (product.id === productToSubtract.id)
        return { ...product, quantity: product.quantity - 1 };
      else return product;
    });

    setCartProducts(newCartProducts);
  };

  const removeProductFromCart = (productToRemove) => {
    const newCartProducts = cartProducts.filter(
      (product) => product.id !== productToRemove.id
    );
    setCartProducts(newCartProducts);
  };

  const value = {
    cartProducts,
    setCartProducts,
    addProductToCart,
    cartCount,
    subtractProductFromCart,
    removeProductFromCart,
    cartSubTotal,
    isMiniCartOpen,
    setIsMiniCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
