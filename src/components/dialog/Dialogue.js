import React from 'react'
import { useDialogueContext } from '../context/DialogueBoxContext'

const Dialogue = () => {
    const {isDialogueOpen,CloseDialogue} = useDialogueContext();

    const handleDialogueBox = (e)=>{
        if(e.target.id === 'dialog-box-overlay'){
            CloseDialogue()
        };
    };

  return (
    isDialogueOpen && (
        <div onClick={handleDialogueBox} id='dialog-box-overlay'>
        <div className="dialog-box">
            dialog-box
        </div>
    </div>
    )
  )
}

export default Dialogue
