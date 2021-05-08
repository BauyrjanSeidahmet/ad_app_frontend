import axios from '../../axiosApi'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import defaultImage from "../../assets/images/defaultImage.png";
import { deleteProduct } from '../../store/actions/productsAction';
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
}, [param.id]);

let cardImage = defaultImage;
if (product.image) {
  cardImage = "http://localhost:8000/uploads/" + product.image;
}

const deleteItem = () => {
  dispatch(deleteProduct(param.id))
}

const user = useSelector(state => state.users.user);

let displayBtn = 'none'
if (user) {
  if (product.user && product.user._id === user._id) {
    displayBtn = 'block'
  }
}

  return (
      <div className='ProductPage'>
        <h1>{product.title}</h1>
        <p>
        <span>Category: </span>
        <span>{product.category && product.category.title}</span>
        </p>
        <div>
          <img className='productImagePage' alt='product' src={cardImage}/>
        </div>
        <span>Price:  {product.price && product.price.$numberDecimal} ₸</span>
        <p>{product.description}</p>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span>Author: </span>
          <p style={{fontWeight: 'bold', marginLeft: '10px'}}>{product.user && product.user.displayName}</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <span>Phone: </span>
          <p style={{fontWeight: 'bold', marginLeft: '10px'}}>{product.user && product.user.phone}</p>
        </div>
        <button style={{display: displayBtn}} onClick={deleteItem}>Delete</button>
      </div>
  );
};


export default ProductPage;