import React, { useEffect, useRef, useState } from 'react'
import AboutSidebar from '../contents/AboutContent/AboutSidebar';
import Welcome from '../contents/AboutContent/Welcome';
import Whatweare from '../contents/AboutContent/Whatweare';
import Features from '../contents/AboutContent/Features';
import Mission from '../contents/AboutContent/Mission';
import Dev from '../contents/AboutContent/Dev';
import Touchwithus from '../contents/AboutContent/Touchwithus';

const About = () => {
  const sections = {
    welcome: useRef(null),
    what: useRef(null),
    features: useRef(null),
    mission: useRef(null),
    dev: useRef(null),
    touch: useRef(null),
  };
  const [activeSection, setActiveSection] = useState("welcome");

  const handleScroll = ()=>{
    const sectionPositions = Object.entries(sections).map(([key, ref])=>({
      key,
      top: ref.current?.getBoundingClientRect().top,
    }))
    const visibleSection = sectionPositions.find(
      (section)=> section.top > 0 && section.top < window.innerHeight / 2
    );
    if(visibleSection){
      setActiveSection(visibleSection.key);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section)=> {
    sections[section]?.current?.scrollIntoView({behavior: 'smooth'});
  }
  


  return (
    <div className='about-container'>
      <AboutSidebar sections={sections} activeSections={activeSection} scrollToSection={scrollToSection}/>
      <div className="ab-contents">
        <section ref={sections.welcome} id='welcome'>
          <Welcome/>
        </section>
        <section ref={sections.what} id='what'>
          <Whatweare/>
        </section>
        <section ref={sections.features} id='features'>
          <Features/>
        </section>
        <section ref={sections.mission} id='mission'>
          <Mission/>
        </section>
        <section ref={sections.dev} id='dev'>
          <Dev/>
        </section>
        <section ref={sections.touch} id='touch'>
          <Touchwithus/>
        </section>
      </div>
    </div>
  )
}

export default About;
