// types
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
} from "../types";
// Services
import { create, getProducts } from "../services";

// Crear nuevos productos
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      await create(product);
      dispatch(addProductSuccess(product));
    } catch (error) {
      console.log(error);
      dispatch(addProductError(true));
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});

// Obtener los productos
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());
    try {
      const data = await getProducts();
      dispatch(downloadProductsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(downloadProductsError());
    }
  };
}
const downloadProducts = () => ({
  type: START_DOWNLOAD_PRODUCTS,
  payload: true,
});

const downloadProductsSuccess = (data) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: data,
});

const downloadProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});
