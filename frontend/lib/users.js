import * as cookie from "cookie";

export const getUserData = async (context) => {
  if (!context.req.headers.cookie) {
    return {
      props: {
        data: [],
      },
    };
  }
  const parsedCookies = cookie.parse(context.req.headers.cookie);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/users/get-info`,
    {
      method: "GET",
      headers: {
        // 'User-Agent': '*',
        accept: "application/json",
        Authorization: `${parsedCookies.token_type} ${parsedCookies.access_token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getUsers = async (context) => {
  if (!context.req.headers.cookie) {
    return {
      props: {
        data: [],
      },
    };
  }
  const parsedCookies = cookie.parse(context.req.headers.cookie);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/users/get-users?name=f`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        // Authorization: `${parsedCookies.token_type} ${parsedCookies.access_token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
