import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-heading'>
        <h1>Form</h1>
      </div>
      <div className='footer-content'>
        <div className='name'>
          <i class="fa fa-user icon"></i>
          <input class="input-field" type="text" placeholder='Name'/>
        </div>
        <div className='email'>
          <i class="fa fa-envelope icon"></i>
          <input class="input-field" type="text" placeholder='Email'/>
        </div>
        <div className='phone'>
          <i class="fa fa-phone icon"></i>
          <input class="input-field" type="text" placeholder='Phone'/>
        </div>
        <div className='comment'>
          <i class="fa fa-pencil icon"></i>
          <input class="input-field" type="text" placeholder='Comment'/>
        </div>
      <button type="submit" class="btn">Register</button>
    </div>
    </div>
  )
}

export default Footer