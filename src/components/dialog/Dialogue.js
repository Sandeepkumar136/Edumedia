import React, { useContext, useState } from "react";
import { useDialogueContext } from "../context/DialogueBoxContext";
import Switch from "react-switch";
import { useDarkMode } from "../context/DarkModeContext";
import { SoundContext } from "../context/SoundContext";
import { useVibration } from "../context/VibrationContext";
import { motion } from "framer-motion"; // Import Framer Motion
import { UseConfirmBox } from "../context/ConfirmBoxContext";

const Dialogue = () => {
  const { isDialogueOpen, CloseDialogue } = useDialogueContext();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { isSoundEnabled, toggleSound, playSound } = useContext(SoundContext);
  const { isVibrationEnabled, toggleVibration, handleClick } = useVibration();
  const { OpenConfirmBox } = UseConfirmBox();

  const [settings, setSettings] = useState({
    userScreen: false,
    notifications: false,
    priceAlerts: false,
    ipTracking: false,
    twoFactorAuth: false,
    vibration: false,
  });

  const toggleSwitch = (settingKey) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: !prevSettings[settingKey],
    }));
  };

  const handleDialogueBox = (e) => {
    if (e.target.id === "dialog-box-overlay") {
      CloseDialogue();
    }
  };

  return (
    isDialogueOpen && (
      <motion.div
        onClick={handleDialogueBox}
        id="dialog-box-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="dialog-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h4 className="heading-dialog">Settings</h4>
          <div className="content-dialog">
            {/* Switch 1: User Screen */}
            <motion.div
              className="setting-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="setting-left-align">
                <i className={`bx ${darkMode ? "bx-moon" : "bx-sun"}`}></i>
                <span className="text-setting">
                  {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
                </span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => {
                    toggleDarkMode();
                    playSound();
                    handleClick();
                  }}
                  checked={darkMode}
                  onColor="#007bff"
                  offColor="#ff6868"
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
              </div>
            </motion.div>

            {/* Switch 2: Notifications */}
            <motion.div
              className="setting-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="setting-left-align">
                <i
                  className={`bx ${
                    isSoundEnabled ? "bxs-bell" : "bxs-bell-off"
                  }`}
                ></i>
                <span className="text-setting">
                  {isSoundEnabled ? "Disable Tap Sound" : "Enable Tab Sound"}
                </span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => {
                    toggleSound();
                    playSound();
                    handleClick();
                  }}
                  checked={isSoundEnabled}
                  onColor="#007bff"
                  offColor="#ff6868"
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
              </div>
            </motion.div>

            {/* Switch 3: Price Alerts */}
            <motion.div
              className="setting-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="setting-left-align">
                <i className="bx bx-moon"></i>
                <span className="text-setting">Disable Alerts</span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => toggleSwitch("priceAlerts")}
                  checked={settings.priceAlerts}
                />
              </div>
            </motion.div>

            {/* Switch 4: Vibration Mode */}
            <motion.div
              className="setting-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="setting-left-align">
                <i
                  className={`bx ${
                    isVibrationEnabled
                      ? "bxs-mobile-vibration"
                      : "bx-mobile-vibration"
                  }`}
                ></i>
                <span className="text-setting">
                  {isVibrationEnabled
                    ? "Disable Vibration"
                    : "Enable Vibration"}
                </span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => {
                    toggleVibration();
                    playSound();
                    handleClick();
                  }}
                  checked={isVibrationEnabled}
                  onColor="#007bff"
                  offColor="#ff6868"
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
              </div>
            </motion.div>

            {/* Switch 5: IP Address Tracking */}
            <motion.div
              className="setting-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="setting-left-align">
                <i className="bx bxs-heart-square"></i>
                <span className="text-setting">Remove all Bookmarks</span>
              </div>
              <div className="right-setting-align">
                <button onClick={()=> {OpenConfirmBox(); CloseDialogue();}} className="setting-btn" type="button">
                  Remove
                </button>
              </div>
            </motion.div>

            {/* Switch 6: Two-Factor Authentication */}
            <motion.div
              className="setting-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="setting-left-align">
                <i className="bx bx-data"></i>
                <span className="text-setting">Delete all Data</span>
              </div>
              <div className="right-setting-align">
                <button type="button" className="setting-btn">
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default Dialogue;
