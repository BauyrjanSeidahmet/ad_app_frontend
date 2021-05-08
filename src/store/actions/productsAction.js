import axios from '../../axiosApi'
import { FETCH_PRODUCTS_SUCCESS } from '../actionTypes';

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

