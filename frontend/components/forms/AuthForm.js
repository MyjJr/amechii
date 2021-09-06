import React, { useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

// cookieインスタンス
const cookies = new Cookies();

const AuthForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  const login = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/login/access-token`,
        {
          method: "POST",
          body: JSON.stringify({
            name: user.username,
            password: user.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const options = { path: "/" };
          cookies.set("access_token", data.access_token, options);
          cookies.set("token_type", data.token_type, options);
        });
      router.push("/");
    } catch (err) {
      alert(err);
    }
  };
  // console.log(isLogin);
  // console.log(user);

  const authUser = async (e) => {
    e.preventDefault();
    if (isLogin) {
      login();
    } else {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/users/create-user`,
          {
            method: "POST",
            body: JSON.stringify({
              name: user.username,
              password: user.password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          }
        });
        login();
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div className="authForm-container">
      {/* <div className="back-btn">
        <a href="">
          <i className="fas fa-arrow-left"></i>
        </a>
      </div> */}
      <div className="welcome">
        <p>
          Welcome to <br /> Amechii
        </p>
      </div>
      <div className="login">
        <form onSubmit={authUser}>
          <div className="form-content username">
            <i className="far fa-user"></i>
            <input
              type="text"
              placeholder="User name"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="form-content password">
            <i className="fas fa-key"></i>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div>
            <button type="submit" className="login-btn">
              {isLogin ? "Login" : "Sign up"}
            </button>
          </div>
          <div className="create-text">
            <span>
              {isLogin
                ? "Amechiiは初めてですか？"
                : "すでにアカウントを持っている"}
            </span>
            <a onClick={() => setIsLogin(!isLogin)} className="create-link">
              {isLogin ? "登録" : "ログイン"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
