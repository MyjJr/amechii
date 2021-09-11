import * as cookie from "cookie";

// export const getAllProjects = async (context) => {
//   if (!context.req.headers.cookie) {
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
//   const parsedCookies = cookie.parse(context.req.headers.cookie);

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/tasks/get-allproject`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `${parsedCookies.token_type} ${parsedCookies.access_token}`,
//       },
//     }
//   );

//   const data = await res.json();

//   return data;
// };

export const handleGetAllProjects = async (context) => {
  if (!context.req.headers.cookie) {
    return {
      props: {
        data: [],
      },
    };
  }
  const parsedCookies = cookie.parse(context.req.headers.cookie);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/tasks/get-allproject`,
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

export const handleGetProjectTasks = async ({ id, context }) => {
  if (!context.req.headers.cookie) {
    return {
      props: {
        data: [],
      },
    };
  }

  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/tasks/get-project?project_id=${id}`,
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

// export const getProductTasks = async ({ id, context }) => {
//   if (!context.req.headers.cookie) {
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }

//   const parsedCookies = cookie.parse(context.req.headers.cookie);
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/tasks/get-project?project_id=${id}`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `${parsedCookies.token_type} ${parsedCookies.access_token}`,
//       },
//     }
//   );
//   const data = await res.json();

//   return data;
// };

export const updateTaskStatus = async ({ cookies, id, status }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/tasks/update-subtask?subtask_id=${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${cookies.token_type} ${cookies.access_token}`,
        },
        body: JSON.stringify({
          status,
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};

export const deleteTask = async ({ cookies, id }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/tasks/del-subtask?subtask_id=${id}`,
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

export const createTask = async ({ cookies, title, projectId }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/tasks/create-subtask`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${cookies.token_type} ${cookies.access_token}`,
        },
        body: JSON.stringify({
          title,
          task_id: projectId,
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};

export const createProject = async ({ cookies, title }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/tasks/create-new-project`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${cookies.token_type} ${cookies.access_token}`,
        },
        body: JSON.stringify({
          title,
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};
