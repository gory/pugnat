'use strict';

import React from 'react';

class ActionLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {

	}

	componentWillUnmount() {
	}

	render() {
		return (
			<a href="#" onClick={this.handleClick}>
				Click me
			</a>
		)
	};

	handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked.');
	}
}

module.exports = ActionLink;