import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Welcome from './Welcome';
import Why from './Why';
import Features from './Features';
import Mission from './Mission';
import Dev from './Dev';
import Touch from './Touchwithus';
import Whatweare from './Whatweare';

const AboutSlider = () => {
    const [activeSection, setActiveSection] = useState(0);
    console.log("Initial activeSection:", activeSection);
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        beforeChange: (current, next) => {
            console.log("Slider beforeChange: from", current, "to", next);
            setActiveSection(next);
            document.getElementById(`section-${next}`).scrollIntoView({ behavior: "smooth" });
        },
        afterChange: (current) => {
            console.log("Slider afterChange: active section is", current);
        }
    }
    
    const sections = [
        {title: 'Welcome', component: <Welcome/>},
        {title: 'What is used', component: <Whatweare/>},
        {title: 'Why use', component: <Why/>},
        {title: 'Features', component: <Features/>},
        {title: 'Mission', component: <Mission/>},
        {title: 'For Dev', component: <Dev/>},
        {title: 'Get Touch', component: <Touch/>},
    ];
    
    console.log("Sections array:", sections);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((_, index) => document.getElementById(`section-${index}`));
            const scrollPosition = window.scrollY;
            
            for (let i = 0; i < sectionElements.length; i++) {
                const section = sectionElements[i];
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        console.log("Scrolling detected, updating activeSection to:", i);
                        setActiveSection(i);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
    <div>
      {console.log("Rendering AboutSlider component")}
      <Slider {...settings}>
        {
            sections.map((section, index) => {
                console.log("Rendering section:", section.title, "Index:", index);
                return (
                    <div key={index} className={activeSection === index ? "active" : ""}>
                        {console.log("Rendering title:", section.title, "at index:", index)}
                        {section.title}
                    </div>
                );
            })
        }
      </Slider>
      <div>
        {sections.map((section, index) => (
            <div key={index} id={`section-${index}`} style={{ padding: "50px 0" }}>
                {console.log("Rendering section on page:", section.title)}
                {section.component}
            </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSlider;
