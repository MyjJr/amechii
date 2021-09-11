import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import {
  MenuIcon,
  LogoutIcon,
  LoginIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { dropdown_menu } from "../../../data/navItem";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const AuthMenu = () => {
  return (
    <Link href="/auth/login">
      <button
        type="button"
        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">View notifications</span>
        <LoginIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </Link>
  );
};

export const UserMenu = (props) => {
  const router = useRouter();
  const logout = (cookie) => {
    cookie.remove("access_token", { path: "/" });
    cookie.remove("token_type", { path: "/" });
    router.push("/");
  };

  const dropdown_menu = [
    { name: "残高: 12,000円", href: "#" },
    { name: "プロフィール", href: "/profile" },
    { name: "欲しいもの", href: "/wishlist" },
  ];

  // const iconURL = `http://amechii.jp/image/icon/${props.userInfo.icon}` ? `http://amechii.jp/image/icon/${props.userInfo.icon}` : "http://amechii.jp/image/icon/default.png"

  return (
    <>
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              // src="http://amechii.jp/image/icon/default.png"
              src={`http://amechii.jp/image/icon/${props.userInfo.icon}`}
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            {dropdown_menu.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ))}
            <div
              onClick={() => logout(props.cookies)}
              className="px-4 py-2 text-sm text-red-600 cursor-pointer rounded"
            >
              ログアウト
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
