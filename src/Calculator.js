import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  handleClick(e) {
    this.state.input1 && this.state.input2 ? this.setState({result: this.state.input1 + this.state.input2}) : alert('Please enter two numeric values');
    
  }

  render() {
    return (
      <div className="container">
        <h1>Calculate with React</h1>
        <div className="add">
          <input type="text" name="input1" onChange={this.handleChange } />

          <span> + </span>
          <input type="text" name="input2" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Sum</button>
          
        </div>
        <h3> Result: {this.state.result} </h3>
      </div>
    )
  }
}

export default Calculator;