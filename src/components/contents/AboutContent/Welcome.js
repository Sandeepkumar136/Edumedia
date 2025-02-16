import React from "react";
import { motion } from "framer-motion";
import ImageProvider from "../../assets/ImageProvider";

const Welcome = () => {
  return (
    <motion.div
      className="ab-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3 
        className="heading-ab"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Welcome to EDUmedia
      </motion.h3>
      
      <motion.img
        className="img-w-ab"
        src={ImageProvider[3].welcome}
        alt={ImageProvider[3].alt}
        loading="lazy" // Native lazy loading
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      />
      
      <motion.p
        className="text-ab-w"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Welcome to our Open Library App! This platform is designed for book
        lovers, researchers, and casual readers. Whether you seek a specific
        book, explore new titles, or search for online reading resources, our
        app has you covered. With seamless navigation, an intuitive interface,
        and quick access to a vast collection, we ensure an enjoyable experience
        for every user. Explore a world of knowledge at your fingertips!
      </motion.p>
    </motion.div>
  );
};

export default Welcome;
