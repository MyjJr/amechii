import React from "react";

const UserProfileSection = ({ userInfo }) => {
  const userProfile = [
    {
      key: "ユーザー名",
      data: userInfo.name,
    },
    {
      key: "プロジェクトの数",
      data: userInfo.do_tasks.length,
    },
    {
      key: "フォローしている数",
      data: userInfo.following.length,
    },
    {
      key: "フォローされている数",
      data: userInfo.followers.length,
    },
  ];

  return (
    <div className="glass rounded h-full flex flex-col justify-center items-center w-full lg:w-2/5">
      <div className="h-3/6 w-full flex flex-col justify-center items-center border-b-2 border-gray-100">
        <p className="text-md font-medium text-gray-700 mb-5">
          {userInfo.display_name}
        </p>
        <img
          className="rounded-xl h-36 w-36 shadow-2xl"
          src={`http://amechii.jp/image/icon/${userInfo.icon}`}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="h-3/6 w-full m-1 flex flex-col justify-center items-center">
        <div class="flex flex-wrap overflow-hidden h-full w-full">
          {userProfile.map((item, index) => (
            <div
              key={index}
              class="w-1/2 h-1/2 overflow-hidden flex flex-col justify-center items-center"
            >
              <p className="text-xs font-normal text-gray-400 mb-1">
                {item.key}
              </p>
              <p className="text-md font-medium text-gray-700">{item.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection;
