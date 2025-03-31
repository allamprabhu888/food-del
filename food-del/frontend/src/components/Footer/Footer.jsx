import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>YumRush</h1>
            <p>YumRush Your go-to food delivery app, bringing delicious meals to your doorstep in no time!Fresh flavors, fast delivery Order now and satisfy your cravings with YumRush.
Secure payments, real-time tracking, and the best restaurants Experience hassle-free food ordering.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>2233344455</li>
                <li>contact@YumRush.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © YumRush.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
