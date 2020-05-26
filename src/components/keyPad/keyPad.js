import React, { useState } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import ClearButton from '../clear/clear';
import * as math from 'mathjs';
import './keyPad.css';
import '../button/button.css';
import '../input/input.css';

function KeyPad() {
  const [state, setState] = useState({ input: '' });

  const addToInput = (val) => {
    console.log(val);
    setState({ input: state.input + val });
  };

  const handleEqual = () => {
    setState({ input: math.evaluate(state.input) });
  };
  return (
    <div>
      <div className="calc-wrapper">
        <Input input={state.input} />
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={() => handleEqual()}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setState({ input: '' })}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default KeyPad;
