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
}, [dispatch]);

console.log('state product user', product.user)

let cardImage = defaultImage;
if (product.image) {
  cardImage = "http://localhost:8000/uploads/" + product.image;
}

const deleteItem = () => {
  console.log('product.id', param.id)
  dispatch(deleteProduct(param.id))
}

const user = useSelector(state => state.users.user);

let displayBtn = 'none'
if (user) {
  if (product.user === user._id) {
    displayBtn = 'block'
  }
}

  return (
      <div className='ProductPage'>
        <div>
          <img className='productImage' alt='product' src={cardImage}/>
        </div>
        <h4>{product.title}</h4>
        <span>{product.price && product.price.$numberDecimal} ₸</span>
        <button style={{display: displayBtn}} onClick={deleteItem}>Delete</button>
      </div>
  );
};


export default ProductPage;