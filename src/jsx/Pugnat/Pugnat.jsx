'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let App = require('./App.jsx');

class Pugnat {
	constructor(element) {
		this.element = element;

		this.header = null;

		ReactDOM.render(
			<App />,
			this.element
		);
	}
}



module.exports = Pugnat;
