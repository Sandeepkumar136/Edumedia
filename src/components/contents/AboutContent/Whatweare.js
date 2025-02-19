import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ImageProvider from '../../assets/ImageProvider';

const Whatweare = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className="what-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h5 
        className="heading-what"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What used in
      </motion.h5>
      
      <motion.img 
        src={ImageProvider[4].what} 
        alt={ImageProvider[4].alt} 
        className="img-what" 
        loading="lazy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      />
      
      <motion.p 
        className="text-what"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Our app utilizes cutting-edge web technologies for a smooth user experience. At its core, the Open Library API provides real-time access to an extensive collection of books. We use React for a dynamic front-end, Context API for state management, and React Hooks for enhanced component behavior. Styled with CSS/Styled Components, our clean UI ensures a visually appealing and efficient experience for book enthusiasts globally.
      </motion.p>
    </motion.div>
  );
}

export default Whatweare;
