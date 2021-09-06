import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileCard = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
      <div
        className="bg-white shadow-lg rounded-lg"
        style={{ height: "70%", width: "70%" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full p-5">
          <div
            className="rounded h-full flex flex-col justify-center items-center"
            style={{ width: "40%" }}
          >
            <div className="bg-gray-300 h-full w-full m-1 flex justify-center items-center">
              <img
                className="rounded-xl"
                src="http://placehold.it/200"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="bg-gray-300 h-full w-full m-1 flex flex-col justify-center items-center"></div>
          </div>
          <div
            className="bg-gray-400 p-3 m-3 rounded h-full"
            style={{ width: "60%" }}
          >
            <div className="editBtn absolute">
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Open dialog
              </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Profile Edit Form
                      </Dialog.Title>

                      <form className="bg-white px-8 pt-6">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                          >
                            Username
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                          >
                            email
                          </label>
                          <input
                            className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="email"
                            placeholder=""
                          />
                          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                      </form>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={closeModal}
                        >
                          更新
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
