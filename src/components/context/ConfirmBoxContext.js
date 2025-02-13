import { createContext, useContext, useState } from "react";

const ConfirmBoxContext = createContext();
export const ConfirmBoxContextProvider = ({children})=>{
    const [isConfirmBoxOpen, setConfirmBoxOpen] = useState(false);
    const OpenConfirmBox = ()=> setConfirmBoxOpen(true);
    const CloseConfirmBox = ()=> setConfirmBoxOpen(false);

    return(
        <ConfirmBoxContext.Provider value={{isConfirmBoxOpen,OpenConfirmBox, CloseConfirmBox}}>
            {children}
        </ConfirmBoxContext.Provider>
    );
};

export const UseConfirmBox = ()=> useContext(ConfirmBoxContext);