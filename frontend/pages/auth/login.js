import React, {useState} from "react";
import router, { useReducer, useRouter } from "next/router";
import Auth from "../../layouts/Auth";
import AuthForm from "../../components/forms/AuthForm";
import Cookies from "universal-cookie"


// cookieインスタンス
const cookies = new Cookies()


function createURLSearchParams(data) {
  const params = new URLSearchParams();
  Object.keys(data).forEach(key => params.append(key, data[key]));
  return params;
}

const data = {
  username: "firstuserver", 
  password: "firstuserpassword"
};


const login = async () => {
  const params = createURLSearchParams(data);
  try {
    await fetch(
      "http://localhost:8080/api/v1/login/access-token",
      {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
      }
    )
    .then((res) => {
      if(res.status === 400) {
        throw "authentication failed";
      } else if(res.ok) {
        return res.json()
      }
    }).then((data) => {
      console.log(data)
      // const options = {path: "/"}
      // cookies.set("access_token", )
    })
    router.push("/")
  } catch(err) {
    alert(err)
  }
}


const Login = () => {
  const router = useRouter()
  const loginParams = {
    title: "Login",
    path: "/auth/register",
    text: "Create new account",
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <AuthForm params={loginParams} loginFn={login}/>
      </div>
    </div>
  );
};

Login.layout = Auth;

export default Login;
