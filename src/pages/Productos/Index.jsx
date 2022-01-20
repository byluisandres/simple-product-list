import React, { useEffect } from "react";

// Components
import Spinner from "../../components/Spinner";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../actions/productsActions";
import Product from "./Product";
import Message from "../../components/Message";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la api
    const loadProducts = () => dispatch(getProductsAction());

    loadProducts();
  }, []);

  // obtebner el state
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
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
            {products.length === 0 ? (
              <tr>
                <td>
                  <Message>No hay productos</Message>
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Index;
