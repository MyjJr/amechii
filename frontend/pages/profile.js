import { useContext, useState } from "react";
import ProfileCard from "../components/cards/ProfileCard";
import BaseLayout from "../components/layouts/BaseLayout";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  console.log(userInfo)


  return <ProfileCard userInfo={userInfo} />;
};

Profile.layout = BaseLayout;

export default Profile;
