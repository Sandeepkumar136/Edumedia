import React from 'react'
import ImageProvider from '../../assets/ImageProvider';

const Whatweare = () => {
  return (
    <div className="what-container">
      <h5 className="heading-what">
        What used in
      </h5>
      <img src={ImageProvider[4].what} alt={ImageProvider[4].alt} className="img-what" />
      <p className="text-what">
      Our app utilizes cutting-edge web technologies for a smooth user experience. At its core, the Open Library API provides real-time access to an extensive collection of books. We use React for a dynamic front-end, Context API for state management, and React Hooks for enhanced component behavior. Styled with CSS/Styled Components, our clean UI ensures a visually appealing and efficient experience for book enthusiasts globally.
      </p>
    </div>
  )
}

export default Whatweare;
