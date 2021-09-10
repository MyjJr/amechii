import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  // URLからデータを取得し、json形式に変換する
  const fetcher = (url) => fetch(url).then((res) => res.json());


  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
