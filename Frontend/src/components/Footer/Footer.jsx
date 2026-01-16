import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
       <div className="footerContent">
        <div className="footer-content-left">
         <img src="foodflux.png" alt="" />
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi omnis, odit molestiae ipsa explicabo facilis repellat alias dolorem! Officiis accusantium fugiat doloremque, repellat modi dolor?</p>
         <div className="footer-social-icon">
            <FacebookIcon sx={{ fontSize: 50 }}/>
            <TwitterIcon sx={{ fontSize: 50 }}/>
            <LinkedInIcon sx={{ fontSize: 50 }}/>
         </div>
        </div>

        <div className="footer-content-center">
            <h2>FOODFLUX</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>7548963241</li>
            <li>foodflux@gmsil.com</li>
          </ul>
        </div>
        
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2025 @ FoodFlux.Com-All Right Reserved</p>
    </div>
  )
}

export default Footer