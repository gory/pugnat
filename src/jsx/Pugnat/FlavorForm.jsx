'use strict';

import React from 'react';

class EssayForm extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
    		value: 'coconut'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		alert('Ur flavor is' + this.state.value);
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
			        <label>
						Pick your favorite La Croix flavor:
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

module.exports = EssayForm;