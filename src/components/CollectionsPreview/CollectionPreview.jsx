import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const CollectionPreview = (props) => {
  const { collection } = props;

  return (
    <div className="collection-preview-wrapper">
      <h2 className="collection-title text-2xl uppercase mb-4 px-3">
        {collection.title}
      </h2>
      <div className="collection-products flex flex-wrap">
        {collection.products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="show-more-button px-3">
        <Link
          to={`/shop/${collection.title}`}
          className="block text-indigo-500 text-lg underline"
        >
          show more
        </Link>
      </div>
    </div>
  );
};

export default CollectionPreview;
