import React from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <>
      <header className="shop-header page-banner">
        <h2 className="text-xl text-white">SHOP</h2>
      </header>
      <section className="section-shop px-3 p-5 min-h-screen">
        <div className="container mx-auto space-y-9">
          <ProductCard />
        </div>
      </section>
    </>
  );
};

export default Shop;
