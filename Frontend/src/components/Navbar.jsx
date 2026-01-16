import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
const Navbar = () => {
  const Navigate = useNavigate();
   const GoToLogin = () =>{
      Navigate("/Login");
   }
   
    const NavigatHome = () =>{
      Navigate("/");
   }
    const [menu,setMenu] = useState("menu")
  return (
    <div className="container">
            <img src="foodflux.png" alt="logo" className='logo' onClick={NavigatHome}></img>
                    <ul className="links">
                        <Link to="/" onClick={()=>setMenu("HOME")} className={menu==="HOME"?"active":""} >HOME</Link>
                        <li><a href="#explore-menu" onClick={()=>setMenu("MENU")} className={menu==="MENU"?"active":""}>MENU</a></li>
                        <li><a href="#app-download" onClick={()=>setMenu("MOBILE-APP")} className={menu==="MOBILE-APP"?"active":""}>MOBILE-APP</a></li>
                        <li><a href="#Footer" onClick={()=>setMenu("CONTACT")} className={menu==="CONTACT"?"active":""}>CONTACT</a></li>
                    </ul>
                <div className="navbar-search">
                    <SearchIcon />
                     <div className="basket">
                  
               <IconButton component={Link} to="/cart">
                <ShoppingBasketIcon />
              </IconButton>
                    <div className="dot"></div>
                </div>
                 <Button variant="primary" onClick={GoToLogin}>SIGN IN</Button>
                </div>
    </div>
  );
}

export default Navbar