import React from 'react'
import ImageProvider from '../../assets/ImageProvider';

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="heading-mission">Our Missions</div>
      <img src={ImageProvider[5].mission} alt={ImageProvider[5].alt} className="img-mission" />
      <p className="text-mn">
      We aim to revolutionize book discovery by making literature and knowledge easily accessible to everyone. Our goal is to bridge the gap between readers and books, whether for education, leisure, or research, through a powerful and user-friendly digital platform.
      </p>
    </div>
  )
}

export default Mission;
