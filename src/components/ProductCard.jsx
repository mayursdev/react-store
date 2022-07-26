import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ProductCard = (props) => {
  const { product } = props;
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className="product-wrapper px-3 pb-2 w-1/2 sm:w-1/3 md:w-1/4">
      <div className="product-card">
        <div className="product-img-wrapper border border-slate-400 overflow-hidden relative group">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-img w-full group-hover:scale-105 group-hover:brightness-90 transition-all duration-500 h-48 object-cover object-center sm:h-64 lg:h-72 xl:h-80"
          />
          <button
            className="block w-full uppercase text-center p-3 bg-slate-800 text-white absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-300 text-sm hover:bg-slate-900"
            onClick={() => addProductToCart(product)}
          >
            Add to cart
          </button>
        </div>
        <div className="product-details py-3">
          <h3 className="product-title font-semibold">{product.name}</h3>
          <p className="text-lg">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
