import React from "react";
import { Pencil, Trash } from "phosphor-react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <tr>
      <th scope="row">{product.name}</th>
      <td>{product.price}</td>

      <td>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Acciones
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to={`/edit/${product.id}`}>
                <Pencil size={20} /> Editar
              </Link>
            </li>
            <li>
              <a className="dropdown-item text-danger" href="#">
                <Trash size={20} color="#DC2626" /> Borrar
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default Product;
