import React from 'react';
import { motion } from 'framer-motion';
import ImageProvider from '../../assets/ImageProvider';

const Touchwithus = () => {
  return (
    <motion.div 
      className="touch-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <motion.h5 
        className="heading-touch"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Get in Touch
      </motion.h5>
      
      <motion.img 
        src={ImageProvider[6].about} 
        alt="" 
        className="img-touch" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
      />
      
      <motion.div 
        className="dese-touch"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        We’d love to hear from you! Stay connected through our official channels for updates, announcements, and support. Your input helps us grow and improve the app for an even better user experience.
      </motion.div>
      
      <motion.ul 
        className="touch-items"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <li><a href="https://github.com/Sandeepkumar136" className="links-touch"><i className='bx bxl-github'></i> <span className="touch-span">GitHub</span></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100024229897494" className="links-touch"><i className='bx bxl-facebook-circle'></i> <span className="touch-span">FaceBook</span></a></li>
        <li><a href="https://www.instagram.com/sandeep_kumar136/" className="links-touch"><i className='bx bxl-instagram'></i> <span className="touch-span">Instagram</span></a></li>
        <li><a href="https://github.com/Sandeepkumar136" className="links-touch"><i className='bx bxl-gmail'></i> <span className="touch-span">Gmail</span></a></li>
        <li><a href="https://vercel.com/sandeep-kumars-projects-7f9d3014/myportfolio" className="links-touch"><i className='bx bxs-user-circle'></i> <span className="touch-span">Portfolio</span></a></li>
      </motion.ul>
    </motion.div>
  );
};

export default Touchwithus;