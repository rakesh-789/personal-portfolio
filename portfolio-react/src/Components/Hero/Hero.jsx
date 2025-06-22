import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const feature = () => {
  return (
    <div id='home' className='p1'>
        <img src={profile_img} alt="Profile" className='profile' />
        <h2><span>I am Rakesh Kumar</span>, Software Engineer based in India.</h2>
        <p1>I am software Engineer from Uttar Pradesh, India</p1>
        <div className="p2">
            <div className="p3"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="p4">My resume</div>
        </div>
    </div>
  )
}

export default feature