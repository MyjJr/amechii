import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ProfileModal from "../modal/ProfileModal";
import SelectAdressBox from "../selectBox/SelectAdressBox";
import { PlusCircleIcon, PlusIcon, PlusSmIcon } from "@heroicons/react/outline";
import UserProfileSection from "../profileComponents/UserProfileSection";
import AddressSection from "../profileComponents/AddressSection";
import ProjectPaymentModal from "../modal/ProjectPaymentModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileCard = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(userInfo);

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg h-full w-full lg:h-5/6 lg:w-5/6">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full p-5">
          <UserProfileSection userInfo={userInfo} />
          <AddressSection userInfo={userInfo} handleOpen={handleOpen} />
          <ProfileModal
            userInfo={userInfo}
            isOpen={isOpen}
            handleOpen={handleOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
