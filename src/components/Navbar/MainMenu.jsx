import React from "react";

const MainMenu = (props) => {
  const { isMenuOpen } = props;

  return (
    <ul
      className={`main-menu nav-list-center py-4 flex flex-col fixed left-0 right-0 items-center bg-white border-y-2 border-slate-800 translate-y-20 ${
        isMenuOpen ? null : "hidden"
      } md:py-2 md:flex md:flex-row md:static md:border-y-0 md:translate-y-0 md:space-x-2`}
    >
      <li>
        <a
          href="#"
          className="font-semibold uppercase p-1 block border-b-2 border-transparent hover:border-slate-800"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-semibold uppercase p-1 block border-b-2 border-transparent hover:border-slate-800"
        >
          Shop
        </a>
      </li>
    </ul>
  );
};

export default MainMenu;
