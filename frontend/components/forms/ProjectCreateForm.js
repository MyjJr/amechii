import { PlusIcon } from "@heroicons/react/outline";
import React from "react";
import Navbar from "../Navbars/Navbar";

const ProjectCreateForm = () => {
  const ProductSection = () => {
    return (
      <div className="rounded h-full flex flex-col justify-center items-center lg:w-5/12">
        <div className="border-2 border-gray-300 h-full w-full flex justify-center items-center">
          <AddProductBtn />
        </div>
        <div className="border-2 border-gray-300 h-full w-full flex flex-col justify-center items-center">
          <div>商品名: </div>
          <div>価格： 円</div>
          <div>商品情報: hogehoge</div>
        </div>
      </div>
    );
  };

  const AddProductBtn = () => {
    return (
      <button
        type="button"
        // onClick={openModal}
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex items-center"
      >
        <PlusIcon className="h-3 w-3" />
        ご褒美を選択する
      </button>
    );
  };
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section lg:overflow-y-scroll bg-coolGray-500">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div
            className="bg-white shadow-lg rounded-lg"
            style={{ height: "85%", width: "85%" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full lg:p-3">
              <ProductSection />

              <div className="rounded h-full flex flex-col justify-center items-center lg:w-7/12">
                <div className="border-2 border-gray-300 w-full lg:h-4/6 relative">
                  <div className="lg:h-1/5 bg-coolGray-200 flex justify-center items-center">
                    <h1>Project title</h1>
                  </div>
                  {/* <hr></hr> */}
                  <div className="lg:h-4/5 flex justify-center items-start relative">
                    {/* <ul className="lg:w-7/12 lg:h-5/6 overflow-y-scroll p-2 no-scrollbar">
                        {data &&
                          data.tasks.map((item) => (
                            <li
                              key={item.id}
                              className="flex justify-evenly items-center border-b border-gray-100 my-4 lg:mx-30"
                            >
                              <input
                                type="checkbox"
                                className="checkbox checkbox-xs"
                                checked={item.isCompleted}
                                onChange={() => handleIsDone(item.id)}
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
                                onClick={() => handleDelete(item.id)}
                              />
                            </li>
                          ))}
                      </ul> */}
                    <form
                      // onSubmit={(e) => handleSubmit(e)}
                      className="lg:w-7/12 flex justify-evenly items-center border-b border-gray-100 lg:mx-30 absolute bottom-1"
                    >
                      <input
                        type="text"
                        className="input border-none text-center w-10/12"
                        //   value={inputValue}
                        placeholder="タスクを入力してください"
                        //   onChange={(e) => setInputValue(e.target.value)}
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

export default ProjectCreateForm;
