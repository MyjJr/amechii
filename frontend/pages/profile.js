import { useState } from "react";
import ProfileCard from "../components/cards/ProfileCard";
import BaseLayout from "../components/layouts/BaseLayout";

const Profile = () => {
  return <ProfileCard />;
};

Profile.layout = BaseLayout;

export default Profile;
