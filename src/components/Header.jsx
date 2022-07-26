import React from "react";

const Header = () => {
  return (
    <header className="home-header h-96 md:h-screen bg-center bg-no-repeat bg-cover">
      <div className="container h-full mx-auto flex justify-end items-center">
        <div className="header-content p-3 text-end sm:pr-10 md:pr-15 lg:pr-20">
          <h2 className="font-semibold uppercase text-5xl text-white mb-5 md:text-7xl lg:text-8xl">
            Unique <br />
            Stylish
          </h2>
          <a
            href="#collections"
            className="inline-block py-3 px-5 bg-slate-800 hover:bg-slate-900 text-white text-sm uppercase transition-all md:text-base md:py-4 md:px-8"
          >
            Explore collections
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
