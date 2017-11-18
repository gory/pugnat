'use strict'

import React from 'react';

let WarningBanner = function(props) {
	if (!props.warn) {
		return null;
	}

	return (
		<div className="warning">
			Warning!
		</div>
	);
}

class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showWarning: true}
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(prevState => ({
			showWarning: !prevState.showWarning
		}));
	}

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
			</div>
		);
	}
}

module.exports = Banner;