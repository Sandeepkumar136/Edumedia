import React, { useState } from "react";

const AboutSidebar = ({ sections, activeSections, scrollToSection }) => {
  const [isAbSidebarOpen, setIsAbSidebarOpen] = useState(true);
  const TogglSidebar = () => {
    setIsAbSidebarOpen(!isAbSidebarOpen);
  };
  const menuItems = [
    { id: "welcome", label: "Welcome to Edumedia" },
    { id: "what", label: "what to Edumedia" },
    { id: "features", label: "Our Features" },
    { id: "mission", label: "Our Missions" },
    { id: "dev", label: "For Developers" },
    { id: "touch", label: "Get in Touch" },
  ];
  return (
    <>
    <div className="ab-sidebar-container">
        <div className="ab-sidebar-upper-contain">
        <i onClick={TogglSidebar} className={`bx ab-sidebar-toggle ${isAbSidebarOpen? "bx-chevron-right": "bx-chevron-right"}`}></i>
        <p className="heading-ab-sidebar">Contents</p>
        </div>
        <aside className={`ab-sidebar ${isAbSidebarOpen ? "open": "close"}`}></aside>
        <ul className="ab-items">
            {
                menuItems.map((e)=>(
                    <li onClick={()=>{scrollToSection(e.id); TogglSidebar();}} className={`ab-list ${activeSections === e.id ? "active": "deactive"}`}>
                        {e.label}.
                    </li>
                ))
            }
        </ul>
    </div>
    </>
  );
};

export default AboutSidebar;
