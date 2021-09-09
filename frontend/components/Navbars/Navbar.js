import { Fragment, useEffect, useState } from "react";
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const cookies = new Cookies();

const Navbar = (props) => {
  const router = useRouter();

  console.log(props)

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


  // ロゴをクリックでユーザー情報取得（仮）
  const getUser = async ()  => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/users/get-info`,{
      // mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${tokenInfo.token_type} ${tokenInfo.access_token}`,
      }
    })
    console.log(data)
  }



  return (
    <Disclosure as="nav" className="bg-gray-800 navbar-section my-auto">
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
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                    onClick={() => getUser()}
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {nav_menu.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
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
                  <UserMenu cookies={cookies} />
                ) : (
                  <AuthMenu />
                )}
              </div>
            </div>
          </div>

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
