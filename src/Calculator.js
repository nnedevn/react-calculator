import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: '',
      num2: '',
      result: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name);
    if (e.target.name === 'input1') {
      this.setState({ num1: parseInt(e.target.value) })
    }
    if (e.target.name === 'input2') {
      this.setState({ num2: parseInt(e.target.value) });
    }
  }

  handleClick(e) {
    return this.state.num1 && this.state.num2 ? this.setState((num1, num2) => {
      return { result: this.state.num1 + this.state.num2 }
    }) : alert('Please populate the two inputs');
  }

  render() {

    return (
      <div className="container">
        <h1>Calculate with React</h1>
        <div className="add">
          <input type="text" name="input1" onChange={this.handleChange} />
          <span> + </span>
          <input type="text" name="input2" onChange={this.handleChange} />
          <h3>{this.state.result}</h3>
          <button onClick={this.handleClick}>Sum</button>
        </div>
      </div>
    )
  }
}

export default Calculator;