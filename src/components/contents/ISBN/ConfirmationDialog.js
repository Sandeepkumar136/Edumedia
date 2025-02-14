import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className='b-c-overlay'>
      <div className="b-c-c-box">
      <p className='heading-confirm' >Are you sure you want to remove?</p>
      <div className="btn-contain-confirm">
      <button className='btn-confirm b-1' onClick={onConfirm}>Confirm</button>
      <button className='btn-confirm b-2' onClick={onCancel}>Cancel</button>
      </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
