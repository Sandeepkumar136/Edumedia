import React, { useEffect, useRef, useState } from 'react'
import AboutSlider from '../contents/others/AboutSlider'

const About = () => {
      const sections = {
    welcome: useRef(null),
    what: useRef(null),
    features: useRef(null),
    why: useRef(null),
    Intregration: useRef(null),
    mission: useRef(null),
    tech: useRef(null),
    team: useRef(null),
    support: useRef(null),
    touch: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("welcome");

  const handleScroll = () => {
    const sectionPositions = Object.entries(sections).map(([key, ref]) => ({
      key,
      top: ref.current?.getBoundingClientRect().top,
    }));

    const visibleSection = sectionPositions.find(
      (section) => section.top > 0 && section.top < window.innerHeight / 2
    );

    if (visibleSection) {
      setActiveSection(visibleSection.key);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <AboutSlider scrollToSection={scrollToSection} activeSection={activeSection}/>
      <div className="ab-content">
      <section ref={sections.team} id="team">
        team section
      </section>
      <section ref={sections.support} id="support">
        <h2>Get Support</h2>
        <p>If you need help, contact our support team...</p>
      </section>
      <section ref={sections.touch} id="touch">
        <h2>Get in Touch</h2>
        <p>Contact us for more information!</p>
      </section>
      </div>
    </div>
  )
}

export default About
