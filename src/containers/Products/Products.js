import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchProducts} from '../../store/actions/productsAction';
import ProductItem from '../../components/ProductItem/ProductItem';
import './Products.css'

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        const url = '/products'
        dispatch(fetchProducts(url));
    }, [dispatch]);

    return (
        <>
            <h2 className='catName'>All Items</h2>
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