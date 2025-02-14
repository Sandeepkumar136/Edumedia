import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UseConfirmBox } from "../../context/ConfirmBoxContext";
import { useSavedBooks } from "../../context/SavedBooksProvider";

const ConfirmDialogueBox = () => {
  const { isConfirmBoxOpen, CloseConfirmBox } = UseConfirmBox();
  const {removeAllFavorites} = useSavedBooks();

  const handleConfirmBox = (e) => {
    if (e.target.id === "Confirm-Box-Overlay") {
      CloseConfirmBox();
    }
  };

  return (
    <AnimatePresence>
      {isConfirmBoxOpen && (
        <motion.div
          id="Confirm-Box-Overlay"
          className="overlay"
          onClick={handleConfirmBox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="confirm-box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h5 className="heading-confirm">
              Are you sure you want to remove all Bookmarks?
            </h5>
            <div className="btn-contain-confirm">
              <motion.button
                type="button"
                className="btn-confirm b-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={()=> {removeAllFavorites(); CloseConfirmBox();}}
              >
                Confirm
              </motion.button>
              <motion.button
                type="button"
                className="btn-confirm b-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={CloseConfirmBox}
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDialogueBox;
