import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
     <a href="#" className='logo'>KAMRODev</a>

     <ul className='permalinks'>
      <li><a href="#">HOME</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>



     <div className='footer__social'>
      <a href="https://www.facebook.com/profile.php?id=100013727227321"><FaFacebookF/></a>
      <a href="https://www.instagram.com/kareemazam7x/"><AiOutlineInstagram/></a>
   
     </div>


     <div className="footer__copyright">
      <small>&copy; KARMODev ,All rights reserved</small>
     </div>
    </footer>
  )
}

export default Footer
