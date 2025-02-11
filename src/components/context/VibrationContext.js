import { createContext, useContext, useState } from "react";

const VibrationContext = createContext();

export const VibrationProvider = ({children})=>{
    const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);

    const handleClick = () =>{
        if(isVibrationEnabled && navigator.vibrate){
            navigator.vibrate(100);
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