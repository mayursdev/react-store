import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";

const Collection = () => {
  const { collection } = useParams();
  const { products } = useContext(ProductsContext);
  const [collectionProducts, setCollectionProducts] = useState([]);

  useEffect(() => {
    if (products[collection])
      setCollectionProducts(products[collection].products);
  }, [collection, products]);

  return (
    <section className="section-collection px-3 p-5 min-h-screen">
      <div className="container mx-auto">
        <h2 className="section-title uppercase">
          {collectionProducts.length ? collection : null}
        </h2>
        <div className="product-list flex flex-row flex-wrap">
          {collectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
