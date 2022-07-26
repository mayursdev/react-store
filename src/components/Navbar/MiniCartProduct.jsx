import React from "react";

const MiniCartProduct = (props) => {
  const { product } = props;

  return (
    <div className="minicart-product flex space-x-2">
      <img src={product.imageUrl} className="h-24 w-20 object-cover border" alt={product.name} />
      <div className="detail flex flex-col justify-around items-start">
        <h2 className="text-sm font-medium"> {product.name} </h2>
        <p className="text-sm">
          {product.quantity} x ${product.price}
        </p>
      </div>
    </div>
  );
};

export default MiniCartProduct;
