import React from 'react';
import './button.css'


function Button(props) {

  const isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };

  return (
    <div>
      <button
        className={`button-wrapper ${
          isOperator(props.children) ? null : 'operator'
        }`}
        onClick={() => props.handleClick(props.children)}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
