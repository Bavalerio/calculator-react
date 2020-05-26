import React from 'react';
import './clear.css';

function ClearButton(props) {
  return (
    <div className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
}
 export default ClearButton;