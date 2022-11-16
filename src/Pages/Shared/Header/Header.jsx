import React from "react";
import logo from "../../../assets/logohotel.png";
import menuItems from "../../../components/MenuItems/MenuItems";
const Header = () => {
  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <img src={logo} alt="" />
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">{menuItems}</ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 font-bold px-5 py-2.5 text-sm  text-linkB"
                href="/"
              >
                Sign In
              </a>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
