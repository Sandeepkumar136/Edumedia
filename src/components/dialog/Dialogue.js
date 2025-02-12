import React, { useState } from "react";
import { useDialogueContext } from "../context/DialogueBoxContext";
import Switch from "react-switch";

const Dialogue = () => {
  const { isDialogueOpen, CloseDialogue } = useDialogueContext();
  const [settings, setSettings] = useState({
    userScreen: false, // Switch 1: User Screen
    notifications: false, // Switch 2: Notifications
    priceAlerts: false, // Switch 3: Price Alerts
    ipTracking: false, // Switch 4: IP Tracking
    twoFactorAuth: false, // Switch 5: Two-Factor Authentication
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
      <div onClick={handleDialogueBox} id="dialog-box-overlay">
        <div className="dialog-box">
          <h4 className="heading-dialog">Settings</h4>
          <div className="content-dialog">
            {/* Switch 1: User Screen */}
            <div className="setting-row">
              <div className="setting-left-align">
                <i className="bx bx-moon"></i>
                <span className="text-setting">User Screen</span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => toggleSwitch("userScreen")}
                  checked={settings.userScreen}
                />
              </div>
            </div>

            {/* Switch 2: Notifications */}
            <div className="setting-row">
              <div className="setting-left-align">
                <i className="bx bx-moon"></i>
                <span className="text-setting">Disable Tab Sounds</span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => toggleSwitch("notifications")}
                  checked={settings.notifications}
                />
              </div>
            </div>

            {/* Switch 3: Price Alerts */}
            <div className="setting-row">
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
            </div>
            <div className="setting-row">
              <div className="setting-left-align">
                <i className="bx bx-moon"></i>
                <span className="text-setting">Disable Vibrations</span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => toggleSwitch("userScreen")}
                  checked={settings.vibration}
                />
              </div>
            </div>
            {/* Switch 4: IP Address Tracking */}
            <div className="setting-row">
              <div className="setting-left-align">
                <i className="bx bx-moon"></i>
                <span className="text-setting">Remove all Favorites</span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => toggleSwitch("ipTracking")}
                  checked={settings.ipTracking}
                />
              </div>
            </div>

            {/* Switch 5: Two-Factor Authentication */}
            <div className="setting-row">
              <div className="setting-left-align">
                <i className="bx bx-moon"></i>
                <span className="text-setting">Delete all Data</span>
              </div>
              <div className="right-setting-align">
                <Switch
                  onChange={() => toggleSwitch("twoFactorAuth")}
                  checked={settings.twoFactorAuth}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Dialogue;
