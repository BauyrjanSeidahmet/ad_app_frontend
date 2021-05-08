import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchProducts} from '../../store/actions/productsAction';
import ProductItem from '../../components/ProductItem/ProductItem';
import { useLocation } from "react-router-dom";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import './Products.css'

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const categoryName = searchParams.get('category')

    useEffect(() => {
        let url = '/products'
        if (categoryName) {
            url = `/products?category=${categoryName}`
        }
        dispatch(fetchProducts(url));
    }, [categoryName]);

    return (
        <>
            <CategoriesList/>
            <h2 className='catName'>{categoryName || 'All Items'}</h2>
            <div className='gridContainer'>
                {products.map(product => {
                    return <ProductItem
                        id={product._id}
                        title={product.title}
                        category={product.category}
                        price={product.price.$numberDecimal}
                        image={product.image}
                        key={product._id}
                        />
                })}
            </div>
        </>
    );
};

export default Products;