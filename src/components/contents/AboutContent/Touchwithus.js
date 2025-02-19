import React from 'react'
import ImageProvider from '../../assets/ImageProvider';

const Touchwithus = () => {
  return (
    <div className="touch-container">
      <h5 className="heading-touch">Get in Touch</h5>
      <img src={ImageProvider[6].about} alt="" className="img-touch" />
      <div className="dese-touch">
      We’d love to hear from you! Stay connected through our official channels for updates, announcements, and support. Your input helps us grow and improve the app for an even better user experience.
      </div>
      <ul className="touch-items">
        <li><a href="#" className="links-touch"><i className='bx bxl-github'></i> <span className="touch-span">GitHub</span></a></li>
        <li><a href="#" className="links-touch"><i className='bx bxl-facebook-circle' ></i> <span className="touch-span">FaceBook</span></a></li>
        <li><a href="#" className="links-touch"><i className='bx bxl-instagram' ></i> <span className="touch-span">Instagram</span></a></li>
        <li><a href="#" className="links-touch"><i className='bx bxl-gmail' ></i> <span className="touch-span">Gmail</span></a></li>
        <li><a href="#" className="links-touch"><i className='bx bxs-user-circle' ></i> <span className="touch-span">Portfolio</span></a></li>
      </ul>
    </div>
  )
}

export default Touchwithus;
