import { createContext, useState, useEffect } from "react";

// import { SAMPLE_PRODUCTS_DATA } from "../data/sample_products";
// import { addCollectionAndDocs } from "../utils/firebase";

const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);
  const value = { products };

  // useEffect(() => {
  //   const populateFirebaseDBWithProducts = async () => {
  //     const collectionName = "products";
  //     const docIdKey = "collectionTitle";

  //     await addCollectionAndDocs(SAMPLE_PRODUCTS_DATA, {
  //       collectionName,
  //       docIdKey,
  //     });
  //   };
  //   populateFirebaseDBWithProducts();
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
