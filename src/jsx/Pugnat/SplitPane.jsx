'use strict';

import React from 'react';

class SplitePane extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

module.exports = SplitePane;
