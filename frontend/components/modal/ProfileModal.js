import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ProfileModal = (props) => {
  const { title, isOpen, handleOpen, children, userInfo } = props;

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
            <div
              className="inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              style={{ height: "55vh", width: "40vw" }}
            >
              <Dialog.Title
                as="h3"
                className="text-md font-semibold leading-5 text-gray-700 pt-2 pb-5 text-center border-b-2 border-gray-100"
              >
                プロフィール編集
              </Dialog.Title>

              <form className="bg-white p-4">
                <div class="form-control my-3">
                  <label class="label">
                    <span class="label-text">ニックネーム</span>
                  </label>
                  <input
                    type="text"
                    placeholder={userInfo.display_name}
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control my-3">
                  <label class="label">
                    <span class="label-text">メールアドレス</span>
                  </label>
                  <input
                    type="email"
                    placeholder="oooooo@oooo.com"
                    class="input input-bordered"
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    type="button"
                    className="btn btn-accent"
                    onClick={handleOpen}
                  >
                    更新する
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProfileModal;
