import Link from "next/link";
import React, { useContext } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { UserContext } from "../contexts/UserContext";

const Card = ({ item }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={item.imageSrc}
            alt={item.imageAlt}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {item.name}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {item.name}
          </a>
          <p className="mt-2 text-gray-500">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

const wishlist = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  if (!userInfo) return null;

  if (!userInfo.favourites.length)
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <div className="alert alert-success">
          <label className="mx-3">
            欲しいものリストには何も追加されていません。。
          </label>
        </div>
        <Link href="/products">
          <a className="text-gray-400 text-sm mt-4">商品ページへ</a>
        </Link>
      </div>
    );

  return (
    <div className="p-5">
      {userInfo.favourites &&
        userInfo.favourites.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

wishlist.layout = BaseLayout;
export default wishlist;
