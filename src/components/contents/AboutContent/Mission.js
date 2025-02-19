import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ImageProvider from '../../assets/ImageProvider';

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className="mission-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="heading-mission"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our Missions
      </motion.div>

      <motion.img 
        src={ImageProvider[5].mission} 
        alt={ImageProvider[5].alt} 
        className="img-mission"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.p 
        className="text-mn"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        We aim to revolutionize book discovery by making literature and knowledge easily accessible to everyone. Our goal is to bridge the gap between readers and books, whether for education, leisure, or research, through a powerful and user-friendly digital platform.
      </motion.p>
    </motion.div>
  );
}

export default Mission;
