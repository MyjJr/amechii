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

export const addFavoriteList = async ({ cookies, id }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/users/add-fav?item_id=${id}`,
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

export const deleteFavoriteList = async ({ cookies, id }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}api/v1/users/del-fav?item_id=${id}`,
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
