import React from 'react'
import './Footer.css';
// import footer_logo from '../../assets/footer_logo.png';
// import user_icon from '../../assets/user_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer-logo} alt="GitHub Icon" /> */}
                <p>I am Software Engineer from India with 3 years of experience. I have  worked with Optum Global Solutions</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    {/* <img src={user_icon} alt="" /> */}
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom=left'>© 2023 Rakesh Kumar. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect</p>
            </div>
        </div>
    </div>
  )
}

export default Footer