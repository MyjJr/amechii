import { SearchCircleIcon, SearchIcon } from "@heroicons/react/outline";
import { UserContext } from "contexts/UserContext";
import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import BaseLayout from "../components/layouts/BaseLayout";
import { followUser, getUsers, unfollowUser } from "../lib/users";
import Cookies from "universal-cookie";


const SearchBox = ({users, setUsers, inputValue, setInputValue}) => {
  const handleGetUsers = async (value) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/users/get-users?name=${value}`,
      {method: "GET"}
    );
    const data = await res.json();
    setUsers(data)
  }

  return (
    <div
      className="lg:w-3/6 md:w-5/6 w-full flex items-center justify-center"
      style={{ height: "25%" }}
    >
      <div className="bg-white flex items-center rounded-full shadow-xl w-full lg:pl-4">
        <input
          className="input rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          type="text"
          placeholder="ユーザーを検索する...."
          value={inputValue}
          onChange={(e) => 
             setInputValue(e.target.value)}
        />
        <div className="p-3">
          <button onClick={() => handleGetUsers(inputValue)}  className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const followingUserIds = userInfo.following.map((data) => data.id)
    
  const Alert = () => {
    return (
      <div class="alert alert-warning">
        <div class="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current"> 
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>                         
          </svg> 
          <label>そのユーザーは存在していません。。。</label>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
      <SearchBox users={users} setUsers={setUsers} inputValue={inputValue} setInputValue={setInputValue} />
      <div
        className="lg:w-3/6 md:w-5/6 w-full bg-white rounded shadow-xl overflow-y-scroll"
        style={{ height: "70%" }}
      >
        {users.length ?
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
                    src={`http://amechii.jp/image/icon/${user.icon}`}
                    alt="Avatar"
                  />
                </div>
                <div>
                  <h1 class="text-xl font-medium text-gray-700">
                    {user.display_name}
                  </h1>
                  <p class="text-gray-400 text-sm">{user.name}</p>
                </div>
              </div>

              {followingUserIds.includes(user.id) ? (
                <button onClick={() => unfollowUser({cookies: userInfo, id: user.id})} class="bg-red-500 hover:opacity-75 text-white rounded-full px-8 py-2 cursor-pointer">
                  解除
                </button>
              ) : (
                <button onClick={() => followUser({cookies: userInfo, id: user.id})} class="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2 cursor-pointer">
                Follow
              </button>
              )}              
            </div>
          )) : <Alert />}
      </div>
      <div style={{ height: "10%" }}></div>
    </div>
  );
};

Users.layout = BaseLayout;

export default Users;

