import { NavLink } from 'react-router-dom'
import defaultImage from "../../assets/images/defaultImage.png";
import './ProductItem.css'

const ProductItem = ({id, title, price, image}) => {
  let cardImage = defaultImage;
  if (image) {
    cardImage = "http://localhost:8000/uploads/" + image;
  }

  return (
      <NavLink to={'/products/' + id} className='ProductItem'>
        <div>
          <img className='productImage' alt='product' src={cardImage}/>
        </div>
        <h4>{title}</h4>
        <span>{price} ₸</span>
      </NavLink>
  );
};

;

export default ProductItem;