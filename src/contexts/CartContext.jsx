import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => {},
  addProductToCart: () => {},
  cartCount: 0,
});

const CartProvider = (props) => {
  const { children } = props;
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartProducts.reduce((acc, curr) => {
      return curr.quantity + acc;
    }, 0);

    setCartCount(newCartCount)
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

  const value = { cartProducts, setCartProducts, addProductToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
