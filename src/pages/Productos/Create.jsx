import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProductAction } from "../../actions/productsActions";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigation = useNavigate();
  //state
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const { name, price } = product;
  // Dispatch
  const dispatch = useDispatch();

  // Acceder al state del store
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  // llama al action
  const addProduct = (product) => dispatch(createNewProductAction(product));

  // Guarda en el state de product
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // válidar formulario
    if (name.trim() === "" || price <= 0) {
      return;
    }

    // crear nuevo producto
    product.price = Number(product.price);
    addProduct(product);
    navigation("/", { replace: true });
  };
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4 font-weight-bold">
          Agregar Nuevo Producto
        </h2>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Nombre Producto</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Producto"
              value={name}
              onChange={handleChange}
              name="name"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="price">Precio Producto</label>
            <input
              type="number"
              className="form-control"
              placeholder="Precio Producto"
              value={price}
              onChange={handleChange}
              name="price"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
          >
            Agregar
          </button>
        </form>

        {loading ? <p>Enviando</p> : null}
        {error ? (
          <div className="alert alert-danger mt-4" role="alert">
            Hubo un error
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Create;
