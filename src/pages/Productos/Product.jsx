import React from "react";
import { Pencil, Trash } from "phosphor-react";
import { Link } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../actions/productsActions";
const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteProductAction(id));
  };
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
              <span
                className="dropdown-item text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(product.id)}
              >
                <Trash size={20} color="#DC2626" /> Borrar
              </span>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default Product;
