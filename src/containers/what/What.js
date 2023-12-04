import React from 'react'
import './what.css'
import image2 from '../../assets/image2.jpg';
// import circle from '../../assets/circle.png';
import circle2 from '../../assets/circle2.png';
// import circle3 from '../../assets/circle3.png';

const What = () => {
  return (
    <div className='what' id="what">
      <div className='what-images'>
        <div className='what-images_image1'>
          <img src={circle2} alt='cirdcle2' />
        </div>
        <div className='what-images_image2'>
          {/* <img src={circle3} alt='cirdcle3' /> */}
        </div>
      </div>
      <div className='what-heading'>
        <img src={image2} alt='image2' />
        <div className='what-heading_content'>
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className='what-image3'>
        {/* <img src={circle} alt='circle' /> */}
      </div>
    </div>
  )
}

export default What