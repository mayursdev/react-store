import React from "react";
import { Link } from "react-router-dom";

const MainMenu = (props) => {
  const { isMenuOpen } = props;

  return (
    <ul
      className={`main-menu nav-list-center py-4 flex flex-col fixed left-0 right-0 items-center bg-white border-y border-black translate-y-20 -mt-2  ${
        isMenuOpen ? null : "hidden"
      } md:py-2 md:-mt-0 md:flex md:flex-row md:static md:border-y-0 md:translate-y-0 md:space-x-2`}
    >
      <li>
        <Link
          to="/"
          className="font-semibold uppercase p-1 block border-b border-transparent hover:border-black"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/shop"
          className="font-semibold uppercase p-1 block border-b border-transparent hover:border-black"
        >
          Shop
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
