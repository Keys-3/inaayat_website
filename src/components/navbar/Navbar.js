import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../assets/logo1.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo1} alt="logo1" />
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#what">ABOUT</a></p>
          <p><a href="#features">ACHIEVMENTS</a></p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">HOME</a></p>
            <p><a href="#what">ABOUT</a></p>
            <p><a href="#features">ACHIEVMENTS</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
