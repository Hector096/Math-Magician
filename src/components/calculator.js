import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: '',
      next: '',
    };
  }

  update = (e) => { this.setState((object) => calculate(object, e.target.textContent)); }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <div className="screen">
          {` ${
            total || operation || next
              ? `${total || ''} ${operation || ''} ${next || ''}`
              : '0'
          }`}
        </div>
        <div className="buttons">
          <button onClick={this.update} type="button">AC</button>
          <button onClick={this.update} type="button">+/-</button>
          <button onClick={this.update} type="button">%</button>
          <button onClick={this.update} className="orange" type="button">÷</button>
          <button onClick={this.update} type="button">7</button>
          <button onClick={this.update} type="button">8</button>
          <button onClick={this.update} type="button">9</button>
          <button onClick={this.update} className="orange" type="button">x</button>
          <button onClick={this.update} type="button">4</button>
          <button onClick={this.update} type="button">5</button>
          <button onClick={this.update} type="button">6</button>
          <button onClick={this.update} className="orange" type="button">-</button>
          <button onClick={this.update} type="button">1</button>
          <button onClick={this.update} type="button">2</button>
          <button onClick={this.update} type="button">3</button>
          <button onClick={this.update} className="orange" type="button">+</button>
          <button onClick={this.update} className="double" type="button">0</button>
          <button onClick={this.update} type="button">.</button>
          <button onClick={this.update} className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
