import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return(
        <div>
           <div className='card-container'> 
                {/* column1 */}
                 <div className='card1'>
                    <h2>Day Zero</h2>
                  <ul>
                    <li><h4>Turning Your Vision into an Actionable Blueprint to Brilliance.</h4></li>
                  </ul>
                 </div>

                 <div className='card2'>
                    <h4>Platform</h4>
                   <ul >
                     <li>Feature</li>
                     <li>Pricing</li>
                     <li>Login</li>
                     <li>Signup</li>
                   </ul>
                 </div>

                 {/* column2 */}
                 <div className='card3'>
                    <h4>Company</h4>
                   <ul className='list-unstyled'>
                     <li>About</li>
                     <li>Career</li>
                     <li>Blog</li>
                     <li>Contact us</li>
                   </ul>
                 </div>

                 {/* column3 */}
                 <div className='card4'>
                    <h4>Legal</h4>
                   <ul>
                     <li>Refund policy</li>
                     <li>Privacy policy</li>
                     <li>Faq</li>
                     <li>Terms and conditions</li>
                   </ul>
                 </div>

                 {/* {column 4} */}
                  <div className='card5'>
                    <h4>Legal</h4>
                   <ul>
                     <li><FaLinkedin /></li>
                     <li><FaYoutube /></li>
                     <li><FaTwitterSquare /></li>
                     <li><FaInstagram /></li>
                   </ul>
                   </div> 
              </div>
            </div>  
      
    )
}
export default Footer;
