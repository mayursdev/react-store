import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import CollectionsPreview from "../../components/CollectionsPreview";

const Previews = () => {
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

export default Previews;
