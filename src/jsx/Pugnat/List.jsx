'use strict'

import React from 'react';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

class List extends React.Component {
	constructor(props) {
		super(props);
		this.numbers = props.numbers;
		this.listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
	}


	render() {
		return (
			<ul>{this.listItems}</ul>
		);
	}
}

module.exports = List;