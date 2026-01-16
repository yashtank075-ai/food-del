import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <>
    <div className="food-display" id="food-display">
       <h2>Top Dishes Near You</h2>
       <p>Discover the best food around you</p>
      <div className="food-display-list">
        {food_list.map((item)=>{
          if(category==="All" || category===item.category){
             return (
      <FoodItem key={item.id} id={item.id} name={item.name} Description={item.Description} price={item.price} image={item.image}/>
             );
          }
          return null;
        })}
      </div>  
    </div>  
    </>
  )
}

export default FoodDisplay