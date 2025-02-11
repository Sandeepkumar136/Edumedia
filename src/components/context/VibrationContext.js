import { createContext, useContext, useState } from "react";

const VibrationContext = createContext();

export const VibrationProvider = ({children})=>{
    const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);

    const handleClick = () =>{
        if(isVibrationEnabled && navigator.vibrate){
            navigator.vibrate([300, 150, 300]); // Vibrate → Pause → Vibrate
        }
    };

    const toggleVibration = ()=>{
        setIsVibrationEnabled((prev)=> !prev);
    };

    return(
        <VibrationContext.Provider value={{isVibrationEnabled, toggleVibration, handleClick}}>
            {children}
        </VibrationContext.Provider>
    );
};

export const useVibration = () => useContext(VibrationContext);