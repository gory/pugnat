'use strict';

import React from 'react';

let BoilingVerdict = 	require('./BoilingVerdict.jsx');
let TemperatureInput = 	require('./TemperatureInput.jsx');

let tryConvert =		require('./tryConvert/tryConvert.js').tryConvert;
let toCelsius = 		require('./tryConvert/tryConvert.js').toCelsius;
let toFahrenheit = 		require('./tryConvert/tryConvert.js').toFahrenheit;


class Calculator extends React.Component {

	constructor(props) {
		super(props);
		this.state = {temperature: '', scale: 'c'};
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature});
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celsius}
          			onTemperatureChange={this.handleCelsiusChange}/>
				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
          			onTemperatureChange={this.handleFahrenheitChange} />
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

module.exports = Calculator;
