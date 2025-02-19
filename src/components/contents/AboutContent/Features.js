import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div 
      className="feature-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <motion.h4 
        className="heading-fea"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Features Embedded
      </motion.h4>
      
      <motion.div 
        className="f-base-contain"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <h5 className="heading-f-base">Main Features</h5>
        <div className="icon-packs-contain-f">
          <div className="icon-pack-f">
            <i className="bx bx-book"></i>
            <p className="icon-pack-text-f">World's All Registered Books</p>
          </div>
          <div className="icon-pack-f">
            <i className="bx bxs-barcode"></i>
            <p className="icon-pack-text-f">ISBN Searcher and Scanner</p>
          </div>
          <div className="icon-pack-f">
            <i className="bx bx-search-alt"></i>
            <p className="icon-pack-text-f">Search All Books</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="f-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <ul className="f-list">
          <li className="item-f">
            <h5 className="heading-f-content">Book Search</h5>
            <p className="text-f-content">Search books by title, author, or ISBN for quick access.</p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">ISBN Scanner</h5>
            <p className="text-f-content">Enter ISBN codes to instantly fetch book details.</p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">Book Details</h5>
            <p className="text-f-content">View descriptions, author info, and publication details.</p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">Reading Links</h5>
            <p className="text-f-content">Access available online reading options.</p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">User Experience</h5>
            <p className="text-f-content">Responsive design ensures smooth navigation.</p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">State Management</h5>
            <p className="text-f-content">Powered by Context API for efficient data handling.</p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">Confirmation Dialogs</h5>
            <p className="text-f-content">Alerts before refreshing or removing books for better control.</p>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Features;
