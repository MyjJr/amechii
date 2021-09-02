import React, { useState } from "react";
import Link from "next/link";

const IndexNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="navbar-section w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                Amechii
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center lg:mx-4 md:my-1 sm:my-1">
                tasks
              </li>
              <li className="flex items-center lg:mx-4 md:my-1 sm:my-1">
                products
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center lg:mx-4 md:my-1 sm:my-1">
                <Link href="/auth/login">
                  <a className="text-blueGray-300 leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                    login
                  </a>
                </Link>
              </li>
              <li className="flex items-center lg:mx-4 md:my-1 sm:my-1">
                <Link href="/auth/register">
                  <a className="text-blueGray-300 leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                    signup
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default IndexNavbar;
