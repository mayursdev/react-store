import React, { createContext, useState } from "react";

const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => {},
  addProductToCart: () => {},
});

const CartProvider = (props) => {
  const { children } = props;
  const [cartProducts, setCartProducts] = useState([]);

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

  const value = { cartProducts, setCartProducts, addProductToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
