import React, { Component } from 'react';
import chromeBoi from './data.js';
import Cell from './Cell.js';
import ColorSelector from './ColorSelector.js';

export default class Matrix extends Component {
	constructor() {
		super();
		this.state = {
			color : '#FFF'
		};
	}

	genRow = (vals) => vals.map((val, idx) => <Cell key={idx} color={val} statedColor={this.statedColor} />);

	genMatrix = () =>
		this.props.values.map((rowVals, idx) => (
			<div key={idx} className="row">
				{this.genRow(rowVals)}
			</div>
		));

	selectColor = (hex) => {
		this.setState({
			color : hex
		});
	};

	statedColor = () => this.state.color;

	render() {
		return (
			<div id="app">
				<ColorSelector selectColor={this.selectColor} />
				<div id="matrix">{this.genMatrix()}</div>
			</div>
		);
	}
}

///write a method takes in a single argument of a hex color string (i.e. '#fff')
//and sets the selected color to that
//pass that method to color selector
Matrix.defaultProps = {
	values : chromeBoi
};
