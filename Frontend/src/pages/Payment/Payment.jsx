import React, { useContext, useState,useEffect } from "react";
import "./Payment.css";
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/asset";

const Payment = () => {
  const { cartitems, deliveryDetails } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("COD");


useEffect(() => {
  console.log("CONTEXT deliveryDetails:", deliveryDetails);
  console.log(
    "LOCALSTORAGE deliveryDetails:",
    JSON.parse(localStorage.getItem("deliveryDetails"))
  );
}, [deliveryDetails]);


  // Calculate subtotal
  const subtotal = food_list.reduce((total, item) => {
    if (cartitems[item.id] > 0) {
      return total + item.price * cartitems[item.id];
    }
    return total;
  }, 0);

  const deliveryCharge = 40;
  const totalAmount = subtotal + deliveryCharge;

  const handlePlaceOrder = () => {
    alert(`Order placed using ${paymentMethod.toUpperCase()}`);
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>

      {/*Delivery Details */}
      <div className="payment-box">
      <h3>Delivery Information</h3>
      {deliveryDetails && deliveryDetails.firstname ? (
       <>
      <p>
        <strong>Name:</strong>{" "}
        {deliveryDetails.firstname} {deliveryDetails.lastname}
      </p>

      <p>
        <strong>Email:</strong> {deliveryDetails.email}
      </p>

      <p>
        <strong>Phone:</strong> {deliveryDetails.phone}
      </p>

      <p>
        <strong>Address:</strong>{" "}
        {deliveryDetails.street},{deliveryDetails.city},{" "}
        {deliveryDetails.state}, {deliveryDetails.zipcode},{" "}
        {deliveryDetails.country}
      </p>
    </>
  ) : (
    <p style={{ color: "red" }}>
      No delivery information found. Please go back and fill the form.
    </p>
  )}
</div>


      {/* Order Summary */}
      <div className="payment-box">
        <h3>Order Summary</h3>

        {food_list.map((item) => {
          if (cartitems[item.id] > 0) {
            return (
              <div className="row" key={item.id}>
                <span>
                  {item.name} x {cartitems[item.id]}
                </span>
                <span>₹{item.price * cartitems[item.id]}</span>
              </div>
            );
          }
          return null;
        })}

        <div className="row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="row">
          <span>Delivery</span>
          <span>₹{deliveryCharge}</span>
        </div>

        <div className="row total">
          <span>Total</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-box">
        <h3>Payment Method</h3>

        <label>
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={paymentMethod === "COD"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
      </div>
    
      {/* Place Order */}
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        {paymentMethod === "cod" ? "Place Order" : "Pay Now"}
      </button>
    </div>
  );
};

export default Payment;
