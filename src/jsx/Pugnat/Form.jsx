'use strict';

import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		alert('A name was submitted: ' + this.state.value);
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

module.exports = Form;