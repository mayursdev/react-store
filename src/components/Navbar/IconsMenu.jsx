import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";
import { signOutUser } from "../../utils/firebase";

const IconsMenu = (props) => {
  const { setIsMenuOpen, setIsMiniCartOpen } = props;
  const { currentUser } = useContext(UsersContext);

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <ul className="nav-list-right flex items-center justify-center space-x-3 relative">
      <li
        className="hamburgur-menu md:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <button className="block">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </li>
      <li
        className="mini-cart-icon relative"
        onClick={() => setIsMiniCartOpen((prev) => !prev)}
      >
        <button href="#" className="relative block">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </li>
      <li>
        {!currentUser ? (
          <Link to="/login" className="block">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        ) : (
          <button className="block" title="Logout" onClick={handleLogout}>
            <svg
              className="w-7 h-7 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        )}
      </li>
    </ul>
  );
};

export default IconsMenu;
