import React from "react";
import { Pencil, Trash } from "phosphor-react";

const Index = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col" colSpan={2}>
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>

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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <Pencil size={20} /> Editar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      <Trash size={20} color="#DC2626"/> Borrar
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
