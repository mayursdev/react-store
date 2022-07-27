import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckoutProduct = (props) => {
  const { product } = props;
  const { addProductToCart, subtractProductFromCart, removeProductFromCart } =
    useContext(CartContext);

  const handleProductDecrement = (product) => {
    if (product.quantity === 1) return;
    subtractProductFromCart(product);
  };

  return (
    <div className="cart-product border-b py-4 pb-5 flex gap-3 w-full">
      <div className="product-img">
        <img
          src={product.imageUrl}
          className="h-56 w-64 border border-slate-400 object-cover"
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-between md:flex-row md:justify-between md:items-start md:w-full">
        <div className="product-details w-52 md:w-56">
          <h2 className="product-title md:text-lg">{product.name} </h2>
          <div className="flex items-center space-x-2 md:flex-col md:items-start md:space-x-0">
            <p className="text-lg text-slate-500">${product.price} </p>
            <button
              className="remove-product"
              onClick={() => removeProductFromCart(product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="product-quantity item-counter flex items-center justify-between border-2 border-slate-800 mb-3 w-2/3 md:w-1/5">
          <button
            className={`decrement px-1 ${
              product.quantity === 1 ? "text-slate-400 cursor-not-allowed" : ""
            }`}
            onClick={() => handleProductDecrement(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <p className="text-lg px-3"> {product.quantity} </p>
          <button
            className="increment px-1"
            onClick={() => addProductToCart(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
        <p className="product-total text-xl w-14">
          ${product.price * product.quantity}
        </p>
      </div>
    </div>
  );
};

export default CheckoutProduct;
