import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const update = (e) => {
    const obj = calculate(state, e.target.innerText);
    setState(obj);
  };

  return (
    <div className="container">
      <div className="screen">
        {` ${
          state.total || state.operation || state.next
            ? `${state.total || ''} ${state.operation || ''} ${state.next || ''}`
            : '0'
        }`}
      </div>
      <div className="buttons">
        <button onClick={update} type="button">
          AC
        </button>
        <button onClick={update} type="button">
          +/-
        </button>
        <button onClick={update} type="button">
          %
        </button>
        <button onClick={update} className="orange" type="button">
          ÷
        </button>
        <button onClick={update} type="button">
          7
        </button>
        <button onClick={update} type="button">
          8
        </button>
        <button onClick={update} type="button">
          9
        </button>
        <button onClick={update} className="orange" type="button">
          x
        </button>
        <button onClick={update} type="button">
          4
        </button>
        <button onClick={update} type="button">
          5
        </button>
        <button onClick={update} type="button">
          6
        </button>
        <button onClick={update} className="orange" type="button">
          -
        </button>
        <button onClick={update} type="button">
          1
        </button>
        <button onClick={update} type="button">
          2
        </button>
        <button onClick={update} type="button">
          3
        </button>
        <button onClick={update} className="orange" type="button">
          +
        </button>
        <button onClick={update} className="double" type="button">
          0
        </button>
        <button onClick={update} type="button">
          .
        </button>
        <button onClick={update} className="orange" type="button">
          =
        </button>
      </div>
    </div>
  );
}
