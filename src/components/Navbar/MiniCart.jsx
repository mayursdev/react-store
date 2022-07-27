import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import MiniCartProduct from "./MiniCartProduct";

const Minicart = (props) => {
  const { isMiniCartOpen } = props;
  const { cartProducts, setIsMiniCartOpen } = useContext(CartContext);

  const renderedMiniCartProducts = cartProducts.map((product) => (
    <MiniCartProduct product={product} key={product.id} />
  ));

  return (
    <div
      className={`mini-cart bg-white border border-black p-3 fixed right-0 top-14 shadow-md sm:right-5 md:top-16 ${
        isMiniCartOpen ? "" : "hidden"
      }`}
    >
      <div className="minicart-products space-y-2 mb-3 max-h-56 w-80 pr-3 overflow-y-scroll">
        {cartProducts.length ? (
          renderedMiniCartProducts
        ) : (
          <div className="p-5 text-center">No products in cart</div>
        )}
      </div>
      <Link
        to="/checkout"
        className="block w-full text-center bg-slate-800 px-7 py-3 text-white font-medium uppercase text-sm transition-all hover:bg-slate-900"
        onClick={() => setIsMiniCartOpen(false)}
      >
        Go to checkout
      </Link>
    </div>
  );
};

export default Minicart;
