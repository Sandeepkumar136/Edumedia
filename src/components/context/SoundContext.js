import { createContext, useState } from "react";

export const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const click = require('../sound/click.mp3')
  const toggleSound = () => {
    setIsSoundEnabled((prev) => !prev);
  };
  const playSound = () => {
    if (isSoundEnabled) {
      const audio = new Audio(click);
      audio.play();
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
