import { createContext, useContext, useState } from "react";

const DialogueBoxContext = createContext();

export const DialogueBoxContextProvider = ({children})=>{
    const [isDialogueOpen, setIsDialogueOpen] = useState(false);
    const OpenDialogue = () => setIsDialogueOpen(true);
    const CloseDialogue = () => setIsDialogueOpen(false);

    return(
        <DialogueBoxContext.Provider value={{isDialogueOpen, OpenDialogue, CloseDialogue}}>
            {children}
        </DialogueBoxContext.Provider>
    );
};
export const useDialogueContext = ()=> useContext(DialogueBoxContext);