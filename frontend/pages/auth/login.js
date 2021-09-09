import React, { useState, useContext } from "react";
import router, { useReducer, useRouter } from "next/router";
import Auth from "../../layouts/Auth";
import AuthForm from "../../components/forms/AuthForm";
import Cookies from "universal-cookie";
import { AuthContext } from "../../contexts/AuthContext";
import BaseLayout from "../../components/layouts/BaseLayout";

// const login = async () => {
//   const params = JSON.stringify({username: "firstuserver", password: "firstuserpassword"})
//   try {
//     await fetch(
//       `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/login/access-token`,
//       {
//         method: "POST",
//         body: params,
//         headers: {
//           "Content-Type": "application/json"
//         },
//       }
//     )
//     .then((res) => {
//       if(res.status === 400) {
//         throw "authentication failed";
//       } else if(res.ok) {
//         return res.json()
//       }
//     }).then((data) => {
//       const options = {path: "/"}
//       cookies.set("access_token", data.access_token, options)
//       // token_typeもここで保存できる。
//     })
//     router.push("/")
//   } catch(err) {
//     alert(err)
//   }
// }

const Login = () => {
  return (
    <AuthForm />
    // <div className="container mx-auto px-4 h-full">
    //   <div className="flex content-center items-center justify-center h-full">
    //     <AuthForm />
    //   </div>
    // </div>
  );
};

Login.layout = BaseLayout;

export default Login;
