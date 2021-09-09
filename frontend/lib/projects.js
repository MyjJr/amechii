import { projectData } from "../data/projectData";

import fetch from "node-fetch";

// export async function getAllPostsData() {
//     const res = await fetch(
//       new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
//     );
//     const posts = await res.json();
//     // const filteredPosts = posts.sort(
//     //   (a, b) => new Date(b.created_at) - new Date(a.created_at)
//     // );
//     // return filteredPosts;
//     return posts
//   }

export async function getAllProjectIds() {
  // const res = await fetch(
  //   new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
  // );
  // const posts = await res.json();
  return projectData.map((project) => {
    return {
      params: {
        id: String(project.id),
      },
    };
  });
}

export async function getProjectData(id) {
  // const res = await fetch(
  //   new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`)
  // );
  const project = projectData.filter((project) => project.id === Number(id));
  // const post = await res.json();
  // console.log(typeof id)
  return project[0];
}
