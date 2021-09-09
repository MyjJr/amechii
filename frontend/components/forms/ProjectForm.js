import Navbar from "../Navbars/Navbar";
// import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";

const ProjectForm = (props) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section overflow-y-scroll bg-gradient-to-r from-teal-400 to-blue-500">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div
            className="bg-white shadow-lg rounded-lg"
            style={{ height: "85%", width: "85%" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full lg:p-3">
              <div className="rounded h-full flex flex-col justify-center items-center lg:w-5/12">
                <div className="border-2 border-gray-300 h-full w-full flex justify-center items-center">
                  <img className="bg-cover" src={props.data.imageURL} />
                </div>
                <div className="border-2 border-gray-300 h-full w-full flex flex-col justify-center items-center">
                  <div>商品名: {props.product.name}</div>
                  <div>価格： {props.product.price}円</div>
                  <div>商品情報: hogehoge</div>
                </div>
              </div>
              <div className="rounded h-full flex flex-col justify-center items-center lg:w-7/12">
                <div className="border-2 border-gray-300 w-full lg:h-4/6 relative">
                  <div className="lg:h-1/5 bg-coolGray-200 flex justify-center items-center">
                    <h1>Project title</h1>
                  </div>
                  {/* <hr></hr> */}
                  <div className="lg:h-4/5 flex justify-center items-start relative">
                    <ul className="w-full lg:w-7/12 lg:h-5/6 overflow-y-scroll p-2 no-scrollbar">
                      {props.data &&
                        props.data.tasks.map((item) => (
                          <li
                            key={item.id}
                            className="flex justify-evenly items-center border-b border-gray-100 my-4 lg:mx-30"
                          >
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs"
                              checked={item.isCompleted}
                              onChange={() => props.handleIsDone(item.id)}
                            />
                            <input
                              type="text"
                              className={
                                item.isCompleted
                                  ? "input border-none text-center w-9/12 line-through"
                                  : "input border-none text-center w-9/12"
                              }
                              defaultValue={item.name}
                              disabled
                            />
                            <TrashIcon
                              className="h-4 w-4 text-red-600 cursor-pointer"
                              onClick={() => props.handleDelete(item.id)}
                            />
                          </li>
                        ))}
                    </ul>
                    {/* <hr className="absolute bottom-14 w-full h-1 bg-gray-200" /> */}
                    <form
                      onSubmit={(e) => props.handleSubmit(e)}
                      className="lg:w-7/12 flex justify-evenly items-center border-b border-gray-100 lg:mx-30 absolute bottom-1"
                    >
                      {/* <PlusIcon className="h-6 w-6 text-gray-500 cursor-pointer" /> */}
                      <input
                        type="text"
                        className="input border-none text-center w-10/12"
                        value={props.inputValue}
                        placeholder="タスクを入力してください"
                        onChange={(e) => props.setInputValue(e.target.value)}
                      />
                    </form>
                  </div>
                </div>
                <div className="border-2 border-gray-300 w-full lg:h-2/6"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectForm;
