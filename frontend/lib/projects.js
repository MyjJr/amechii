import * as cookie from "cookie";

export const getAllProjects = async (context) => {
  if (!context.req.headers.cookie) {
    return {
      props: {
        data: [],
      },
    };
  }
  const parsedCookies = cookie.parse(context.req.headers.cookie);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/tasks/get-mytasks`,
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


export const getProductTasks = async ({id}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/tasks/get-subtasks?task_id=${id}`,
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
