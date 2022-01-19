import React from "react";

const Edit = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>
        <form method="POST">
          <div className="form-group mb-3">
            <label htmlFor="name">Nombre Producto</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Producto"
              name="name"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="price">Precio Producto</label>
            <input
              type="number"
              className="form-control"
              placeholder="Precio Producto"
              name="price"
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
