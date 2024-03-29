import { Fragment, useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  LogoutIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav_menu } from "../../data/navItem";
import Cookies from "universal-cookie";
import { AuthMenu, UserMenu } from "./NavItem";
import { UserContext } from "../../contexts/UserContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const cookies = new Cookies();

const Navbar = (props) => {
  const router = useRouter();

  const { userInfo, setUserInfo } = useContext(UserContext);

  // console.log(userInfo);

  const [tokenInfo, setTokenInfo] = useState({
    access_token: "",
    token_type: "",
  });

  useEffect(() => {
    setTokenInfo({
      access_token: cookies.get("access_token"),
      token_type: cookies.get("token_type"),
    });
  }, [cookies]);

  return (
    <Disclosure
      as="nav"
      className="bg-white navbar-section h-17 mx-auto shadow pt-1"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
            <div className="relative flex items-center justify-between h-16 lg:h-full">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-6 w-auto mt-1"
                    src="https://lh3.googleusercontent.com/pw/AM-JKLV6FHLJ3tY7lo2WdWkkSRm3TLVilk95rFJvLlMDc0xDHBwpaY8XimKe8PFBBEA6DZRZMWTbSimnCdF93wSok8V3-Nk9jWv_bBwsSRKbV1h0XLTWkLNZQuo1oEPBwXmOEPdJP3dd0FgaMJfhFLJXnIg=w1444-h304-no?authuser=0"
                    alt="Amechii"
                  />
                  <img
                    className="hidden lg:block h-6 w-auto mt-1"
                    src="https://lh3.googleusercontent.com/pw/AM-JKLV6FHLJ3tY7lo2WdWkkSRm3TLVilk95rFJvLlMDc0xDHBwpaY8XimKe8PFBBEA6DZRZMWTbSimnCdF93wSok8V3-Nk9jWv_bBwsSRKbV1h0XLTWkLNZQuo1oEPBwXmOEPdJP3dd0FgaMJfhFLJXnIg=w1444-h304-no?authuser=0"
                    alt="Amechii"
                  />
                </div>
                ​
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {nav_menu.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.href === router.pathname
                              ? "border-b-2 border-teal-400 text-gray-900"
                              : "hover:opacity-75",
                            "mt-4 px-3 py-5 text-sm text-gray-500"
                          )}
                          aria-current={
                            item.href === router.pathname ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {tokenInfo.access_token ? (
                  <UserMenu cookies={cookies} userInfo={userInfo} />
                ) : (
                  <AuthMenu />
                )}
              </div>
            </div>
          </div>
          ​
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {nav_menu.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={classNames(
                      item.href === router.pathname
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={
                      item.href === router.pathname ? "page" : undefined
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
