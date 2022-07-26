import { createContext, useState, useEffect } from "react";
import { fetchAllProductsFromDB } from "../utils/firebase";

const ProductsContext = createContext({
  products: {},
});

const ProductsProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState({});
  const value = { products };

  useEffect(() => {
    const fetchProductsFromDB = async () => {
      const fetchedProducts = await fetchAllProductsFromDB();
      console.log(fetchedProducts);
      setProducts(fetchedProducts);
    };
    fetchProductsFromDB();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
