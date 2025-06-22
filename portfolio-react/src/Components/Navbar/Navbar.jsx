import React from 'react'
import './Navbar.css'; // Assuming you have a CSS file for styling
import logo from '../../assets/logo.png';
import { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right ="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
    <img src={logo} alt="Logo" className='logo'/>
    <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
    <ul ref={menuRef} className='nav-menu'>
      <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
      <li className='nav-item'><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")} >Home</p></AnchorLink>{menu==="home" ? "" : ""}</li>
      <li className='nav-item'><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")} >About</p></AnchorLink>{menu==="about" ? "" : ""}</li>
      <li className='nav-item'><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")} >Services</p></AnchorLink>{menu==="services" ? "" : ""}</li>
      <li className='nav-item'><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")} >Portfolio</p></AnchorLink>{menu==="portfolio" ? "" : ""}</li>
      <li className='nav-item'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")} >Contact</p></AnchorLink>{menu==="contact" ? "" : ""}</li>
    </ul><p></p>
    <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
    </div>
    </div>
  )
}

export default Navbar