import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw", // Ensures it takes full width
        position: "fixed",
        top: "0",
        left: "0", // Center it properly
        zIndex: 9999, // Ensures it's above everything
      }}
    >
      <ClipLoader color="#36d7b7" loading={loading} size={50} />
    </div>
  );
};

export default Loader;
