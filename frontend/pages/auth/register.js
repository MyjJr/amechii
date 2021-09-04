import React from "react";
import Auth from "../../layouts/Auth";
import AuthForm from "../../components/forms/AuthForm";

const register = () => {
  const registerParams = {
    title: "Register",
    path: "/auth/login",
    text: "I have my account",
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        {/* <AuthForm params={registerParams} /> */}
      </div>
    </div>
  );
};

// register.layout = Auth;

export default register;
