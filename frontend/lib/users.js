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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/users/get-users?name=f`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};

export const followUser = async ({ cookies, id }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/users/follow-user?id=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${cookies.token_type} ${cookies.access_token}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};

export const unfollowUser = async ({ cookies, id }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/users/unfollow-user?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${cookies.token_type} ${cookies.access_token}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};
