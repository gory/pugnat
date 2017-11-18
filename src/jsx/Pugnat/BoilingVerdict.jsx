'use strict';

import React from 'react';

class BoilingVerdict extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.celsius >= 100) {
			return <p>The water would boil.</p>;
		}

		return <p>The water would not boil.</p>;
	}
}

module.exports = BoilingVerdict;