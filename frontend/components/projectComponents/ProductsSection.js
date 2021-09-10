import React from "react";

const ProductsSection = ({ projectData }) => {

  const item = projectData.items[0].items
  return (
    <div className="rounded h-full flex flex-col justify-center items-center lg:w-5/12">
      <div className="border-2 border-gray-300 h-full w-full flex justify-center items-center">
        <img className="bg-cover h-32" src={`http://amechii.jp/image/item/${item.image}`} />
      </div>
      <div className="border-2 border-gray-300 h-full w-full flex flex-col justify-center items-center">
        <div>商品名: {item.name}</div>
        <div>価格： {item.price}円</div>
        <div>商品情報: hogehoge</div>
      </div>
    </div>
  );
};

export default ProductsSection;
