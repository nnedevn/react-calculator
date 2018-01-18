import React, {Component} from 'react';

class Calculator extends Component{
  render(){
    return(
      <div className="container">
        <h1>Calculate with React</h1>
        <div className="add">
          <input type="text"/>
          <span> + </span>
          <input type="text"/>
          <h3>Addition Results go Here</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;