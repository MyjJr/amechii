import { SearchCircleIcon, SearchIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { getUsers } from "../lib/users";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  const temp = {
    display_name: "hogehoge",
    icon: "default.png",
    id: 2,
    name: "hogehoge",
  };

  useEffect(() => {
    if (props.data) {
      setUsers([...props.data, temp]);
    }
  }, []);

  console.log(props.data);
  console.log(users);

  const SearchBox = () => {
    return (
      <div
        className="lg:w-3/6 md:w-5/6 w-full flex items-center justify-center"
        style={{ height: "25%" }}
      >
        <div class="bg-white flex items-center rounded-full shadow-xl w-full lg:pl-4">
          <input
            class="input rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="ユーザーを検索する...."
          />
          <div class="p-3">
            <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
      <SearchBox />
      <div
        className="lg:w-3/6 md:w-5/6 w-full bg-white rounded shadow-xl overflow-y-scroll"
        style={{ height: "60%" }}
      >
        {users &&
          users.map((user) => (
            <div
              key={user.id}
              className="rounded-t flex justify-between items-center w-full border-b-2 border-gray-200 p-6"
              style={{ height: "10vh" }}
            >
              <div class="flex">
                <div class="mr-4">
                  <img
                    class="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full"
                    src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg"
                    alt="Avatar"
                  />
                </div>
                <div>
                  <h1 class="text-xl font-medium text-gray-700">
                    {user.display_name}
                  </h1>
                  <p class="text-gray-600 text-sm">UX Designer at Hyrule</p>
                </div>
              </div>
              <button class="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2">
                Follow
              </button>
            </div>
          ))}
      </div>
      <div style={{ height: "15%" }}></div>
    </div>
  );
};

Users.layout = BaseLayout;

export default Users;

export const getServerSideProps = async (context) => {
  const data = await getUsers(context);
  return {
    props: {
      data,
    },
  };
};
