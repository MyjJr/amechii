import React from "react";
import { PlusCircleIcon, PlusIcon, PlusSmIcon } from "@heroicons/react/outline";
import SelectAdressBox from "../selectBox/SelectAdressBox";

const AddressSection = ({ userInfo, handleOpen }) => {
  return (
    <div className="glass px-5 m-1 rounded h-full w-full lg:w-3/5">
      <div
        className="w-full flex justify-center items-center"
        style={{ height: "15%" }}
      >
        <p className="text-md font-medium text-gray-700">お届け先住所</p>
      </div>
      <div
        className="border-t-2 border-b-2 border-gray-200 overflow-y-scroll"
        style={{ height: "75%" }}
      >
        <SelectAdressBox userInfo={userInfo} />
        <div className="flex justify-center mt-5">
          <PlusSmIcon className="h-7 w-7 text-gray-700 cursor-pointer" />
        </div>
      </div>
      <div
        className="w-full flex justify-end items-center"
        style={{ height: "10%" }}
      >
        <button onClick={handleOpen} className="btn btn-outline btn-accent">
          編集する
        </button>
      </div>
    </div>
  );
};

export default AddressSection;
