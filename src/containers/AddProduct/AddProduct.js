import React from "react";
import {useDispatch} from "react-redux";
import { Typography } from '@material-ui/core';
import ProductForm from '../../components/ProductForm/ProductForm';
import { createProduct } from "../../store/actions/productsAction";

const NewProduct = () => {

  const dispatch = useDispatch();
  const formSubmitHandler = async product => {
    await dispatch(createProduct(product));
  };

  return (
    <>
      <Typography variant="h4">
        Create new item
      </Typography>
      <ProductForm onSubmit={formSubmitHandler} />
    </>
  );
};

export default NewProduct;