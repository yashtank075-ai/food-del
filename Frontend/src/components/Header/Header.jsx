import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css'
function Header(){
   return(
    <div className="header">
       <div className="headercontent">
         <h2>Order Your Favourite Food</h2>
         <p>An Online Food Ordering System is a web-based application that enables customers to order food online without visiting the restaurant. It helps users save time while allowing restaurants to manage orders efficiently.</p>
         <Button variant='danger'>View Menu</Button>
       </div>
    </div>
   );
}
export default Header