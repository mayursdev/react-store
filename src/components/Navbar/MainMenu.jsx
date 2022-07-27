import React from "react";
import { Link } from "react-router-dom";

const MainMenu = (props) => {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <ul
      className={`main-menu nav-list-center flex flex-col fixed z-50 -top-4 left-0 right-0 items-center bg-white border-y border-black translate-y-20 -mt-2 py-2 ${
        isMenuOpen ? "" : "hidden"
      } md:py-0 md:-mt-0 md:flex md:flex-row md:static md:border-y-0 md:translate-y-0 md:space-x-3`}
      onClick={() => setIsMenuOpen(false)}
    >
      <li className="w-full text-center py-2 md:py-0">
        <Link
          to="/"
          className="font-semibold uppercase block md:border-b border-transparent hover:border-black"
        >
          Home
        </Link>
      </li>
      <li className="w-full text-center py-2 md:py-0">
        <Link
          to="/shop"
          className="font-semibold uppercase block md:border-b border-transparent hover:border-black"
        >
          Shop
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
