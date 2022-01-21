import React from "react";
import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../actions/productsActions";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(deleteProductAction(id));
  };

  // Función que redirige de forma programada
  const handleClickEdit = (product) => {
    navigate(`/edit/${product.id}`, { replace: true });
  };
  return (
    <tr>
      <td scope="row">{product.name}</td>
      <td scope="row">
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(product.price)}
      </td>

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
              <span
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleClickEdit(product)}
              >
                <Pencil size={20} /> Editar
              </span>
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
