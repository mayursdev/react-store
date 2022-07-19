import React from "react";

const Minicart = (props) => {
  const { isMiniCartOpen } = props;

  return (
    <div
      className={`mini-cart bg-white border-2 border-slate-800 p-3 fixed right-0 top-16 sm:right-5 ${
        isMiniCartOpen ? null : "hidden"
      }`}
    >
      <div className="minicart-products space-y-2 mb-3 h-56 pr-5 overflow-y-scroll">
        <div className="minicart-product flex space-x-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0561/4380/6647/products/lifestyle-product-03.jpg?v=1625567164"
            className="h-24 border-2"
            alt=""
          />
          <div className="detail flex flex-col justify-around items-start">
            <h2 className="text-sm font-medium">Pouch Pocket Hoodie Orange</h2>
            <p className="text-sm">1 x $26</p>
          </div>
        </div>
        <div className="minicart-product flex space-x-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0561/4380/6647/products/lifestyle-product-03.jpg?v=1625567164"
            className="h-24 border-2"
            alt=""
          />
          <div className="detail flex flex-col justify-around items-start">
            <h2 className="text-sm font-medium">Pouch Pocket Hoodie Orange</h2>
            <p className="text-sm">1 x $26</p>
          </div>
        </div>
        <div className="minicart-product flex space-x-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0561/4380/6647/products/lifestyle-product-03.jpg?v=1625567164"
            className="h-24 border-2"
            alt=""
          />
          <div className="detail flex flex-col justify-around items-start">
            <h2 className="text-sm font-medium">Pouch Pocket Hoodie Orange</h2>
            <p className="text-sm">1 x $26</p>
          </div>
        </div>
      </div>
      <button className="block text-center bg-slate-800 p-2 text-white font-medium uppercase text-sm">
        Go to checkout
      </button>
    </div>
  );
};

export default Minicart;
