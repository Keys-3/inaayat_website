import React from 'react';
import image1 from '../../assets/image1.jpg';
import './header.css';

const Header = () => (
  <div className="header" id="home">
    <div className="header-content">
      <h1>WE ARE</h1>
      <h2>INAAYAT</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <div className="header-content__input">
        <button1 type="button1">BUTTON 1</button1>
        <button2 type="button2">BUTTON 2</button2>
      </div>
    </div>
    <div className="header-image">
      <img src={image1} alt='image1' />
    </div>
  </div>
  
);

export default Header;

