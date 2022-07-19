import React from "react";

const Header = () => {
  return (
    <header className="home-header h-96 md:h-screen -mt-7 bg-center bg-no-repeat bg-cover">
      <div className="container h-full mx-auto flex justify-end items-center">
        <div className="header-content p-3 text-end sm:pr-10 md:pr-15 lg:pr-20">
          <h2 className="font-semibold uppercase text-5xl text-white mb-5 md:text-7xl lg:text-8xl">
            Unique <br />
            Stylish
          </h2>
          <a
            href="#collections"
            className="py-2 px-6 bg-slate-800 text-white text-sm uppercase md:text-base lg:text-lg"
          >
            Explore collections
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
