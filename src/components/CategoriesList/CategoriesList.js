import { NavLink } from 'react-router-dom'
import './CategoriesList.css'

const CategoriesList = () => {
    return (
        <div className='CategoriesList'>
            <NavLink className='categoryLink' to='/'>All Items</NavLink>
            <NavLink className='categoryLink' to='/products?category=computers'>Computers</NavLink>
            <NavLink className='categoryLink' to='/products?category=cars'>Cars</NavLink>
            <NavLink className='categoryLink' to='/products?category=others'>Others</NavLink>
        </div>
    )
}

export default CategoriesList