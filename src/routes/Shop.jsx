import React, { useContext } from "react";
import CollectionsPreview from "../components/CollectionsPreview";
import { ProductsContext } from "../contexts/ProductsContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <header className="shop-header page-banner bg-center bg-no-repeat bg-cover">
        <h2 className="text-xl text-white">SHOP</h2>
      </header>
      <section className="section-shop px-3 p-5 min-h-screen">
        <div className="container mx-auto space-y-9">
          <CollectionsPreview products={products} />
        </div>
      </section>
    </>
  );
};

export default Shop;
