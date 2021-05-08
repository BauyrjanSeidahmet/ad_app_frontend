import axios from '../../axiosApi'
import { FETCH_PRODUCTS_SUCCESS, CREATE_PRODUCT_SUCCESS } from '../actionTypes';
import {push} from "connected-react-router";

export const fetchProductsSuccess = products => {
    return {type: FETCH_PRODUCTS_SUCCESS, products};
  };
  
export const fetchProducts = url => {
    return async dispatch => {
      try {
        const response = await axios.get(url);
        dispatch(fetchProductsSuccess(response.data));
      } catch(e) {
        console.log(e);
      }
    };
  };

  const createProductSuccess = () => {
    return {type: CREATE_PRODUCT_SUCCESS};
  };
  
  export const createProduct = product => {
    return async dispatch => {
      try {
        await axios.post("/products", product);
        dispatch(createProductSuccess());
        dispatch(push("/"));
      } catch(e) {
        console.log(e);
      }
    };
  };

