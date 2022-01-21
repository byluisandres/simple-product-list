export const create = async (product) => {
  let response;
  try {
    const res = await fetch(
      "https://simple-products-list.byluisandres.com/api/products",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    response = console.error("Error:", error);
  }
};

export const getProducts = async () => {
  return await fetch(
    "https://simple-products-list.byluisandres.com/api/products",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(function (data) {
      return data.products.data;
    });
};

export const getProductId = async (id) => {
  return await fetch(
    `https://simple-products-list.byluisandres.com/api/products/${id}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(function (data) {
      return data;
    });
};

export const edit = async (product) => {
  let response;
  try {
    await fetch(
      `https://simple-products-list.byluisandres.com/api/products/${product.id}`,
      {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    response = console.error("Error:", error);
  }
};

export const deleteProduct = async (id) => {
  let response;
  try {
    await fetch(
      `https://simple-products-list.byluisandres.com/api/products/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (error) {
    response = console.error("Error:", error);
  }
};
