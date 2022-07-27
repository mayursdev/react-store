import React, { useContext } from "react";
import CheckoutCartEmpty from "../components/Checkout/CheckoutCartEmpty";
import CheckoutCartProduct from "../components/Checkout/CheckoutCartProduct";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { cartProducts, cartSubTotal } = useContext(CartContext);

  return (
    <>
      <header className="checkout-header page-banner">
        <h2 className="text-xl text-white uppercase">CHECKOUT</h2>
      </header>

      <section className="section-checkout px-3 p-5 min-h-screen">
        <div className="container mx-auto">
          {cartProducts.length ? (
            <div className="cart">
              <div className="cart-products-list flex flex-col space-y-3 mb-5">
                {cartProducts.map((product) => {
                  return (
                    <CheckoutCartProduct key={product.id} product={product} />
                  );
                })}
              </div>
              <div className="pay-details">
                <div className="subtotal-price flex items-center justify-between font-semibold text-xl mb-3 lg:justify-end">
                  <p className="lg:mr-4">SUBTOTAL:</p>
                  <p className="text-2xl">${cartSubTotal}</p>
                </div>
                <div className="checkout-btn text-end">
                  <button className="block w-full text-center text-white uppercase bg-slate-800 p-3 font-semibold hover:bg-slate-900 transition-all sm:inline-block sm:w-52">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <CheckoutCartEmpty />
          )}
        </div>
      </section>
    </>
  );
};

export default Checkout;
