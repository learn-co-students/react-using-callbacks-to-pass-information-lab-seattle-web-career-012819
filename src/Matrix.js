import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      color: '#333'
    }
    this.currentColor = ""
  }

  changeColor = (color) => {
    console.log(color)
    this.setState({
      color: color
    }, () => {
      this.currentColor = this.state.color
      console.log(this.currentColor)
    })


  }

  changeCellColor = () => {
    console.log("Matrix side of changeCellColor",this.state.color)
    return this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeCell={this.changeCellColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector newColor={this.changeColor}/>
        {/* <Cell changeCell={this.changeCellColor()}/> */}
        {/* {console.log(this.changeCellColor())} */}
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}