import { HeartIcon, XIcon } from "@heroicons/react/solid";
// import { HeartIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, useContext } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import {
  addFavoriteList,
  deleteFavoriteList,
  getAllProducts,
} from "../lib/products";
import Image from "next/image";
import { UserContext } from "../contexts/UserContext";
import { redirectHomePage } from "lib/redirect";

const Products = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [categoryType, setCategoryType] = useState("全て");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // redirectHomePage({userInfo})

  console.log(categoryType);

  console.log(props.products);

  const filteredProducts = ({ products, categoryType }) => {
    if (categoryType === "全て") return products;
    return products.filter((item) => item.category === categoryType);
  };

  console.log(filteredProducts({ products: props.products, categoryType }));

  const addFavorite = async ({ cookies, id }) => {
    const data = await addFavoriteList({ cookies, id });
    setUserInfo({ ...userInfo, favourites: data });
  };

  const deleteFavorite = async ({ cookies, id }) => {
    const data = await deleteFavoriteList({ cookies, id });
    setUserInfo({ ...userInfo, favourites: data });
  };

  const FavIcon = ({ favorite, id }) => {
    const favItemIds = favorite.map((data) => data.items.id);
    const isFav = favItemIds.includes(id);
    if (isFav)
      return (
        <HeartIcon
          className="h-7 w-7 text-red-500 cursor-pointer"
          onClick={() => deleteFavorite({ cookies: userInfo, id })}
        />
      );
    return (
      <HeartIcon
        className="h-7 w-7 text-gray-200 cursor-pointer"
        onClick={() => addFavorite({ cookies: userInfo, id })}
      />
    );
  };

  const categories = [
    "全て",
    "グルメ",
    "ファッション",
    "エンタメ",
    "家電",
    "キッズ",
  ];

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="text-center">
        <h1 className="text-lg">おすすめ商品</h1>
        <div className="my-7 pb-5">
          {categories.map((item, index) => (
            <a
              key={index}
              className="hover:opacity-75 cursor-pointer"
              onClick={() => setCategoryType(item)}
            >
              <span
                className={classNames(
                  categoryType === item ? "text-gray-800" : "text-gray-300",
                  "mx-3 text-sm font-medium"
                )}
              >
                {item}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {props.products &&
          filteredProducts({ products: props.products, categoryType }).map(
            (product) => (
              <div key={product.id}>
                <a href="#" className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src={`http://amechii.jp/image/${product.image}`}
                      alt={product.detail}
                      width={500}
                      height={500}
                      className="object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                </a>
                <div className="flex justify-between items-center px-1">
                  <div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                  {userInfo.favourites && (
                    <FavIcon id={product.id} favorite={userInfo.favourites} />
                  )}
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

Products.layout = BaseLayout;

export default Products;

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: { products },
    revalidate: 3,
  };
}
