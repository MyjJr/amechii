export const getAllProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/v1/items/get-items?skip=0&limit=100&order_desc=true`,
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

export const addFavoriteList = async ({cookies, id}) => {
  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/users/add-fav?item_id=${id}`,
      {
        method: "POST",
        // body: "",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${cookies.token_type} ${cookies.access_token}`
        },
      }
    )
  } catch (err) {
    alert(err);
  }
}
