import { useState } from "react";
import { Tab } from "@headlessui/react";
import Navbar from "../components/Navbars/Navbar";
import ProfileCard from "../components/cards/ProfileCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section">
        <ProfileCard />
      </main>
    </div>
  );
};

export default Profile;
