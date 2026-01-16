import React,{useContext} from 'react'
import './FoodItem.css'
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import Button from 'react-bootstrap/Button';
import { StoreContext } from '../../Context/StoreContext';
const FoodItem = ({id,name,Description,price,image}) => {

  const {cartitems,AddToCart,RemoveCart} = useContext(StoreContext);
  console.log("FOOD ITEM ID 👉", id, typeof id);
  console.log("CART ITEMS 👉", cartitems);
  return (
    <>
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt="" />
            {
              !cartitems[id] 
              ?<AddIcon onClick={()=>AddToCart(id)} className='add'/>
              : <div className="food-item-counter">
                 <Button variant="outline-danger" onClick={()=>RemoveCart(id)}>-</Button>
                <p className='counter'>{cartitems[id]}</p>
                 <Button variant="outline-success" onClick={()=>AddToCart(id)}>+</Button>
              </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p><br /> 
               <Rating />
            </div>
            <p className='food-item-desc'>{Description}</p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
    </>
  )
}
export default FoodItem