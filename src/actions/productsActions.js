// types
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCT_EDIT,
  START_PRODUCT_EDIT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,
} from "../types";
// Services
import {
  create,
  getProducts,
  deleteProduct,
  getProductId,
  edit,
} from "../services";

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

// Obtener Producto editar
export function getProductEditAction(id) {
  return async (dispatch) => {
    const data = await getProductId(id);
    if (data.status !== 0) {
      dispatch(getProductEdit(data));
    }
  };
}
const getProductEdit = (product) => ({
  type: GET_PRODUCT_EDIT,
  payload: product,
});

// Editar producto
export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct());
    try {
      await edit(product);
      dispatch(editProductSuccess(product));
    } catch (error) {
      console.log(error);
      dispatch(editProductError());
    }
  };
}

const editProduct = () => ({
  type: START_PRODUCT_EDIT,
});

const editProductSuccess = (product) => ({
  type: PRODUCT_EDIT_SUCCESS,
  payload: product,
});

const editProductError = () => ({
  type: PRODUCT_EDIT_ERROR,
  payload: true,
});
// eliminar producto
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));
    try {
      await deleteProduct(id);
      dispatch(productDeleteSucces());
    } catch (error) {
      console.log(error);
      dispatch(productDeleteError());
    }
  };
}
const getProductDelete = (id) => ({
  type: GET_PRODUCT_DELETE,
  payload: id,
});

const productDeleteSucces = () => ({
  type: PRODUCT_DELETE_SUCCESS,
});

const productDeleteError = () => ({
  type: PRODUCT_DELETE_ERROR,
  payload: true,
});
