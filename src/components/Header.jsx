import React from "react";
import { Plus } from "phosphor-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container p-2">
        <nav className="d-flex justify-content-between align-items-center">
          <h1>
            <Link to={"/"} className="text-light text-uppercase text-decoration-none">Lista de Productos</Link>
          </h1>
          <Link to={"/create"} className="btn btn btn-outline-light">
            <Plus size={16} /> Nuevo Producto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
