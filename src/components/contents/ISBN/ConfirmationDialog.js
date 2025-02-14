import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <p>Are you sure?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ConfirmationDialog;
