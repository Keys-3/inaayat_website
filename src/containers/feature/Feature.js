
import React from 'react';
import './feature.css';
import shape from '../../assets/shape.png';

const Features = () => (
  <div className="feature" id="features">
    {/* <img src={shape} alt="shape"/> */}
    <div className='features_content'>
      <div className="features-heading">
        <h1>ACHIEVMENTS</h1>
      </div>
      <div className='features_2023'>
        <button>2023</button>
        <p>Lorem Ipsum is simply dummy text of the</p>
      </div>
      <div className='features_2022'>
        <p>Lorem Ipsum is simply dummy text of the</p>
        <button>2022</button>
      </div>
      <div className='features_2021'>
        <button>2021</button>
        <p>Lorem Ipsum is simply dummy text of the</p>
      </div>
    </div>
    <div className='features_image'>
      {/* <img src={shape} alt="shape"/> */}
    </div>
  </div>
);

export default Features;
