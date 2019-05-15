import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
    // console.log(props)
  }

  handleClick = (event) => {
    // this.changeColorState()
    event.preventDefault()
    console.log("inside handleClick in Cell.js",this.props.changeCell())
    this.setState({color: this.props.changeCell()}, () => console.log(this.state.color))

  }

  changeColorState = () => {
    console.log("inside changeColorState in Cell.js",this.props.changeCell)
    this.setState({color: this.props.changeCell})
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }
  
}
