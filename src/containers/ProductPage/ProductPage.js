import axios from '../../axiosApi'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import defaultImage from "../../assets/images/defaultImage.png";
import './ProductPage.css'

const ProductPage = ({title, price, image}) => {
  const [product, setProduct] = useState({})

  const dispatch = useDispatch()
  const param = useParams()

  const makeRequest = async () => {
      const response = await axios.get(`/products/${param.id}`)
      if (response.data) {
          setProduct(response.data)
      }
  }

  useEffect(() => {
    makeRequest()
}, [dispatch]);

console.log('state product', product)

let cardImage = defaultImage;
if (product.image) {
  cardImage = "http://localhost:8000/uploads/" + product.image;
}

  return (
      <div className='ProductPage'>
        <div>
          <img className='productImage' alt='product' src={cardImage}/>
        </div>
        <h4>{product.title}</h4>
        <span>{product.price && product.price.$numberDecimal} ₸</span>
      </div>
  );
};


export default ProductPage;