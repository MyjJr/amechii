import React from "react";
import Auth from "../../layouts/Auth";
import AuthForm from "../../components/forms/AuthForm";

const Login = () => {
  const loginParams = {
    title: "Login",
    path: "/auth/register",
    text: "Create new account",
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <AuthForm params={loginParams} />
      </div>
    </div>
  );
};

Login.layout = Auth;

export default Login;
