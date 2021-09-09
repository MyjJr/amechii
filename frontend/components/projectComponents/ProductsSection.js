import React from "react";

const ProductsSection = ({ data, product }) => {
  return (
    <div className="rounded h-full flex flex-col justify-center items-center lg:w-5/12">
      <div className="border-2 border-gray-300 h-full w-full flex justify-center items-center">
        <img className="bg-cover" src={data.imageURL} />
      </div>
      <div className="border-2 border-gray-300 h-full w-full flex flex-col justify-center items-center">
        <div>商品名: {product.name}</div>
        <div>価格： {product.price}円</div>
        <div>商品情報: hogehoge</div>
      </div>
    </div>
  );
};

export default ProductsSection;
