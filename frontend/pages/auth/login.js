import React, { useState, useContext } from "react";
import router, { useReducer, useRouter } from "next/router";
import Auth from "../../layouts/Auth";
import AuthForm from "../../components/forms/AuthForm";
import Cookies from "universal-cookie";
import { AuthContext } from "../../contexts/AuthContext";
import BaseLayout from "../../components/layouts/BaseLayout";


const Login = () => {
  return (
    <AuthForm />
  );
};

Login.layout = BaseLayout;

export default Login;
