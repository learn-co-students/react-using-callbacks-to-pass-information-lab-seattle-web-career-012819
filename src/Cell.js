import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      color: this.props.color
    }
  }

  handleClick = (e) => {
    const color = this.props.getColor()
    console.log("CELL", color)
    this.setState({ color })
  }
  
  render() {
    return (
      <div 
        className="cell" 
        onClick={this.handleClick}
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
