import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ToggleBtn from "../buttons/ToggleBtn";
import SelectUserBox from "../selectBox/selectUserBox";

const ProjectPaymentModal = ({ isOpen, handleOpen }) => {
  const listStyle = "h-full w-1/2 flex items-center justify-center";
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleOpen}
      >
        <div className="min-h-screen px-4 text-center bg-black bg-opacity-80">
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
            <div
              className="inline-block w-full p-6 my-3 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              style={{ height: "85vh", width: "60vw" }}
            >
              <Dialog.Title
                as="h3"
                className="border-b-2 border-gray-300 pb-3 text-lg font-medium leading-6 text-gray-900 text-center"
              >
                確認・決済ページ
              </Dialog.Title>

              <div className="flex flex-col p-2 h-full w-full">
                <div className="border-b-2 border-gray-300 h-full w-full flex justify-evenly items-center">
                  <p className={listStyle}>決済</p>
                  <div className={listStyle}>残高：XXXX円</div>
                </div>
                <div className="border-b-2 border-gray-300 h-full w-full flex justify-evenly items-center">
                  <p className={listStyle}>お届け先</p>
                  <div className={listStyle}>住所：XXXXXX</div>
                </div>
                <div className="border-b-2 border-gray-300 h-full w-full flex justify-evenly items-center">
                  <p className={listStyle}>誰に？</p>
                  <div className={listStyle}>
                    <SelectUserBox />
                  </div>
                </div>

                <div className="border-b-2 border-gray-300 h-full w-full flex justify-evenly items-center">
                  <p className={listStyle}>締め切り</p>
                  <div className={listStyle}>XXXXX</div>
                </div>
                <div className="border-b-2 border-gray-300 h-full w-full flex items-center">
                  <p className={listStyle}>募金しますか？</p>
                  <div className={listStyle}>
                    <ToggleBtn />
                  </div>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <button className="btn btn-primary">
                    このプロジェクトを開始する
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectPaymentModal;
