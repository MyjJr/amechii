import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ProfileModal from "../modal/ProfileModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileCard = ({userInfo}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div class="h-full w-full md:flex md:justify-center md:items-center">
      <ProfileModal isOpen={isOpen} handleOpen={handleOpen} />
      <div class="pt-5 sm:pt-0 md:w-4/6">
        <div class="md:grid md:grid-cols-3 md:gap-5">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">プロフィール</h3>
              <div class="mt-1 text-sm text-gray-600 w-40 rounded-3xl overflow-hidden">
                <img src="http://placehold.it/200" />
              </div>
              <div>
                <div class="mt-10">
                    <lavel class="text-sm font-medium text-gray-400">ユーザーネーム</lavel>
                    <p>HANAKO</p>
                </div>
                <div class="mt-6">
                    <label class="text-sm font-medium text-gray-400">パスワード</label>
                    <p>ooooooooo</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 md:mt-0 md:col-span-2">
              <div class="overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-12">
                    
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-400">名前</label>
                        <p>山本花子</p>
                    </div>
        
                    <div class="col-span-6 sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium text-gray-400">電話番号</label>
                        <p>000-0000-0000</p>
                    </div>
        
                    <div class="col-span-6 sm:col-span-4">
                        <label for="email-address" class="block text-sm font-medium text-gray-400">メールアドレス</label>
                        <p>oooooo@oooo.com</p>
                    </div>
  
                    <div class="col-span-6 sm:col-span-3">
                          <label for="city" class="block text-sm font-medium text-gray-400">郵便番号</label>
                          <p>000-0000</p>
                    </div>
        
                    <div class="col-span-6">
                        <label for="street-address" class="block text-sm font-medium text-gray-400">住所</label>
                        <p>神奈川県相模原市中央区淵野辺</p>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 text-right sm:px-6">
                  <button onClick={handleOpen} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    変更
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfileCard;



    {/* // <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
    //   <div
    //     className="bg-white shadow-lg rounded-lg"
    //     style={{ height: "70%", width: "70%" }}
    //   >
    //     <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full p-5">
    //       <div
    //         className="rounded h-full flex flex-col justify-center items-center"
    //         style={{ width: "40%" }}
    //       >
    //         <div className="bg-gray-300 h-full w-full m-1 flex justify-center items-center">
    //           <img
    //             className="rounded-xl"
    //             src="http://placehold.it/200"
    //             style={{ borderRadius: "50%" }}
    //           />
    //         </div>
    //         <div className="bg-gray-300 h-full w-full m-1 flex flex-col justify-center items-center"></div>
    //       </div>
    //       <div
    //         className="bg-gray-400 p-3 m-3 rounded h-full"
    //         style={{ width: "60%" }}
    //       >
    //         <div className="editBtn absolute">
    //           <button
    //             type="button"
    //             onClick={openModal}
    //             className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    //           >
    //             Open dialog
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}
