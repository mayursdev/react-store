import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import MainMenu from "./MainMenu";
import IconsMenu from "./IconsMenu";
import Minicart from "./MiniCart";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMiniCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="p-3 py-4 border-b border-black fixed w-full bg-white z-50 shadow-md md:py-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="nav-brand font-semibold">
            <h1 className="text-lg font-bold">
              <Link to="/" className="inline-block">
                🔥REACTSTORE
              </Link>
            </h1>
          </div>
          {/* Main menu */}
          <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {/* Icons menu */}
          <IconsMenu setIsMenuOpen={setIsMenuOpen} />
          {/* mini cart */}
          <Minicart isMiniCartOpen={isMiniCartOpen} />
        </div>
      </nav>
      <div className="pt-[61px] md:pt-[77px]"></div>
    </>
  );
};

export default Navbar;
