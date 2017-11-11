'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let Welcome = require('./Welcome.jsx');

class Pugnat {
	constructor(element) {
		this.element = element;

		this.header = null;

		setInterval(this.tick.bind(this), 1000);
	}

	tick() {
		this.header = (
			<div>
				<h1>oh geeze</h1>
				<h2>It is {new Date().toLocaleTimeString()}.</h2>
				<Welcome name="Sara" />
			</div>
		);
		console.log('brain');
		ReactDOM.render(
			this.header,
			this.element
		);
	}
}

module.exports = Pugnat;
