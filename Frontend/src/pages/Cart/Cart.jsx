// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../Context/StoreContext';

// const Cart = () => {
//   const { cartitems, food_list } = useContext(StoreContext);
//   return (
//     <>
//     <div>
//        <hr />
//     </div>
//     <div className='cart'>
//       <div className='cart-item'>

//         <div className='cart-item-title'>
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <hr />
//         {food_list.map((item) =>{
//             if(cartitems[item.id]>0){
//               return(
//                 <div>
//                 <div className='cart-item-title cart-items-item'>
//                     <img src={item.image} alt={item.name} />
//                     <p>{item.name}</p>
//                     <p>₹{item.price}</p>
//                     <p>{cartitems[item.id]}</p>
//                     <p>₹{item.price * cartitems[item.id]}</p>
//                     <p>x</p>
//                 </div>
//                 <hr />
//                 </div>
//               )
//             }
//           })}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Cart;
import React, { useContext,} from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cartitems, food_list, AddToCart, RemoveCart } =
    useContext(StoreContext);
   const cartEmpty = Object.values(cartitems).every(qty => qty === 0);
  // Calculate subtotal
  const subtotal = food_list.reduce((total, item) => {
    if (cartitems[item.id] > 0) {
      return total + item.price * cartitems[item.id];
    }
    return total;
  }, 0);

  const deliveryCharge = subtotal > 500 ? 0 : 40;

  const Navigate = useNavigate();
  const NavigateOrder = ()=>{
     Navigate("/order");
  }
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <div className="cart-container">
        {/* CART ITEMS */}
        <div className="cart-items">
          {food_list.map((item) => {
            if (cartitems[item.id] > 0) {
              return (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>

                    <div className="quantity">
                      <RemoveIcon onClick={() => RemoveCart(item.id)} />
                      <span>{cartitems[item.id]}</span>
                      <AddIcon onClick={() => AddToCart(item.id)} />
                    </div>
                  </div>

                  <div className="item-total">
                    <p>₹{item.price * cartitems[item.id]}</p>
                    <DeleteIcon
                      className="delete"
                      onClick={() => RemoveCart(item.id)}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
       
        {/* PRICE SUMMARY */}
       <div className="cart-summary">
      <h3>Order Summary</h3>

  <div className="summary-row">
    <span>Sub Total</span>
    <span>₹{subtotal}</span>
  </div>

  <div className="summary-row">
    <span>Delivery</span>
    <span>{deliveryCharge}</span>
  </div>

  <div className="summary-row total">
    <span>Total</span>
    <span>₹{subtotal + deliveryCharge}</span>
  </div>

  <button
    className="checkout-btn"
    disabled={cartEmpty}
    onClick={NavigateOrder}
  >
    {cartEmpty ? "Cart is Empty" : "Proceed to Checkout"}
  </button>
</div>
      </div>
    </div>
  );
};

export default Cart;
