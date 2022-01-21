import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  getProductEditAction,
  editProductAction,
} from "../../actions/productsActions";

const Edit = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });
  let params = useParams();
  let navigate = useNavigate();
  let productedit;
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la api
    const loadProduct = () => dispatch(getProductEditAction(params.id));
    loadProduct();
  }, [params.id]);
  // producto a editar
  productedit = useSelector((state) => state.products.producteditar);
  useEffect(() => {
    setProduct(productedit);
  }, [productedit]);

  if (!productedit) return null;

  const { name, price } = productedit;

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProductAction(product));

    navigate("/", { replace: true });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Nombre Producto</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Producto"
              name="name"
              defaultValue={name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="price">Precio Producto</label>
            <input
              type="text"
              className="form-control"
              placeholder="Precio Producto"
              name="price"
              defaultValue={price}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
          >
            Editar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
