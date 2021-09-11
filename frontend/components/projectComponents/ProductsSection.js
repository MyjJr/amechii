import SelectProducts from "components/selectBox/SelectProducts";
import React from "react";

const ProductsSection = ({ projectData, userInfo }) => {
  const item = projectData.items[0]?.items;

  return (
    <div className="rounded h-full flex flex-col justify-center items-center lg:w-5/12">
      <div className="border-2 border-gray-300 h-full w-full flex justify-center items-center">
        {item ? (
          <img
            className="bg-cover h-32"
            src={`http://amechii.jp/image/item/${item.image}`}
          />
        ) : (
          <img
            className="bg-cover h-32"
            src={`http://amechii.jp/image/item/${userInfo.favourites[0].items.image}`}
          />
        )}
      </div>
      <div className="border-2 border-gray-300 h-full w-full flex flex-col justify-center items-center">
        <div className="h-full w-full flex items-center justify-evenly">
          商品名：
          {item ? item.name : userInfo.favourites[0].items.name}
        </div>
        <div className="h-full w-full flex items-center justify-evenly">
          価格：
          {item ? item.price : userInfo.favourites[0].items.price}円
        </div>
        <div className="h-full w-full flex items-center justify-evenly">
          {item ? item.detail : userInfo.favourites[0].items.detail}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
