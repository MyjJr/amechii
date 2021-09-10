import { HeartIcon, XIcon } from "@heroicons/react/solid";
// import { HeartIcon } from "@heroicons/react/solid";
import React, {useState, useEffect, useContext} from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Navbar from "../components/Navbars/Navbar";
import { productsData } from "../data/productsData";
import { addFavoriteList, getAllProducts } from "../lib/products";
import Image from "next/image";
import Cookies from "universal-cookie";
import { UserContext } from "../contexts/UserContext";


const Products = (props) => {

  const FavIcon = ({ favorite, id }) => {
    const favItemIds = favorite.map((data) => data.items.id)
    const isFav = favItemIds.includes(id)
    if (isFav)
      return <HeartIcon className="h-7 w-7 text-red-500 cursor-pointer" />;
    return <HeartIcon className="h-7 w-7 text-gray-200 cursor-pointer" onClick={() => addFavoriteList({cookies: tokenInfo, id})} />;
  };

  const cookies = new Cookies();

  const { userInfo, setUserInfo } = useContext(UserContext);

  const [tokenInfo, setTokenInfo] = useState({
    access_token: "",
    token_type: "",
  });

  useEffect(() => {
    setTokenInfo({
      access_token: cookies.get("access_token"),
      token_type: cookies.get("token_type"),
    });
  }, []);


  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="text-center">
        <h1 className="text-lg">おすすめ商品</h1>
        <div className="my-7 pb-5">
          <span className="mx-2">全て</span>
          <a className="hover:opacity-75">
            <span className="mx-2 text-gray-400">ファッション</span>
          </a>
          <a className="hover:opacity-75">
            <span className="mx-2 text-gray-400">書籍</span>
          </a>
          <a className="hover:opacity-75">
            <span className="mx-2 text-gray-400">インテリア</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {props.products &&
          props.products.map((product) => (
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
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                {userInfo.favourites && <FavIcon id={product.id} favorite={userInfo.favourites}/> }
                
              </div>
            </div>
          ))}
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
