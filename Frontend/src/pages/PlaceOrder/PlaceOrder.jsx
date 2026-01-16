import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/asset';
import { useNavigate } from 'react-router-dom';


function PlaceOrder() {
  const {cartitems,SetDeliveryDetails} = useContext(StoreContext);
  const [formdata,Setformdata] = useState({
     firstname:"",
        lastname:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""
  });

   const handlechange = (e) =>{
    Setformdata({...formdata,[e.target.name]:e.target.value});
   };


   const navigate = useNavigate();
   const handlecontinue = () => {
  SetDeliveryDetails(formdata);
  localStorage.setItem("deliveryDetails", JSON.stringify(formdata));
  navigate("/payment");
};


  const cartEmpty = Object.values(cartitems).every(qty => qty === 0);



  const subtotal = food_list.reduce((total, item) => {
    if (cartitems[item.id] > 0) {
      return total + item.price * cartitems[item.id];
    }
    return total;
  }, 0);

  const deliveryCharge = subtotal > 500 ? 0 : 40;
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' name="firstname" onChange={handlechange} />
          <input type="text" placeholder='Last Name' name="lastname" onChange={handlechange} />
        </div>
        <input type="email" placeholder='Email Address' name="email" onChange={handlechange}/>
        <input type="text" placeholder='Street' name="street" onChange={handlechange}/>
        <div className="multi-fields">
          <input type="text" placeholder='City' name="city" onChange={handlechange}/>
          <input type="text" placeholder='State' name="state" onChange={handlechange}/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' name="zipcode" onChange={handlechange}/>
          <input type="text" placeholder='Country' name="country" onChange={handlechange}/>
        </div>
        <input type="text" placeholder='Phone' name="phone" onChange={handlechange}/>
      </div>
      <div className="place-order-right">
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
    onClick={handlecontinue}
  >
    { cartEmpty ? "Cart is Empty" : "Proceed to Payment"}
  </button>
</div>
      </div>
    </div>
  )
}

export default PlaceOrder 