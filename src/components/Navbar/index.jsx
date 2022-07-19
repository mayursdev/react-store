import React, { useState } from "react";
import MainMenu from "./MainMenu";
import IconsMenu from "./IconsMenu";
import Minicart from "./MiniCart";

const Navbar = () => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="p-3 border-b border-black fixed w-full bg-white z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="nav-brand font-semibold">
            <h1 className="text-lg font-bold">
              <a href="/" className="inline-block">
                🔥REACTSTORE
              </a>
            </h1>
          </div>
          {/* Main menu */}
          <MainMenu isMenuOpen={isMenuOpen} />
          {/* Icons menu */}
          <IconsMenu
            setIsMenuOpen={setIsMenuOpen}
            setIsMiniCartOpen={setIsMiniCartOpen}
          />
          {/* mini cart */}
          <Minicart isMiniCartOpen={isMiniCartOpen} />
        </div>
      </nav>
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
