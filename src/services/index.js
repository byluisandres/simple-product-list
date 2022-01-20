export const create = async (product) => {
  let response;
  try {
    const res = await fetch("http://localhost:4000/productos", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    response = console.error("Error:", error);
  }
};

export const getProducts = async () => {
  return await fetch("http://localhost:4000/productos")
    .then((response) => response.json())
    .then(function (data) {
      return data;
    });
};

export const deleteProduct = async (id) => {
  let response;
  try {
    await fetch(`http://localhost:4000/productos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  } catch (error) {
    response = console.error("Error:", error);
  }
};
