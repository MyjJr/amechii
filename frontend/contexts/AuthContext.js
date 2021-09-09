import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    name: "",
    password: "",
  });

  const [tokenInfo, setTokenInfo] = useState({
    access_token: "",
    token_type: "",
  });

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, tokenInfo, setTokenInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
