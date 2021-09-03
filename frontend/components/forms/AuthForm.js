import React, {useState} from "react";
import Link from "next/link";
import Cookies from "universal-cookie"
import {useRouter} from "next/router";


// cookieインスタンス
const cookies = new Cookies()

const AuthForm = ({ params }) => {
  const router = useRouter()

  const [user, setUser] = useState({
    username: "firstuserver",
    password: "firstuserpassword",
  });


  const login = async () => {
    const params = JSON.stringify({username: user.username, password: user.password})
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/login/access-token`,
        {
          method: "POST",
          body: params,
          headers: {
            "Content-Type": "application/json"
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
        const options = {path: "/"}
        cookies.set("access_token", data.access_token, options)
        // token_typeもここで保存できる。
      })
      router.push("/")
    } catch(err) {
      alert(err)
    }
  }
  
  return (
    <div className="w-full lg:w-5/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center mb-3">
            <h3 className="text-blueGray-500 text-2xl font-bold">
              {params.title}
            </h3>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                username
              </label>
              <input
                type="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Username"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                  Remember me
                </span>
              </label>
            </div>

            <div className="text-center mt-6">
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
                onClick={() => login()}
              >
                {params.title}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 relative">
        <div className="w-1/2"></div>
        <div className="w-1/2 text-right">
          <Link href={params.path}>
            <a href="#pablo" className="text-blueGray-800">
              <small>{params.text}</small>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
