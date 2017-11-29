'use strict';

import React from 'react';

let Color = require('./Color.jsx');

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        let myClasses = 'colorpicker';
        let myStyles = {
        }

        return (
            <div className={myClasses} style={myStyles} >
                <Color color="#fff" onColorChange={this.props.onColorChange} />
                <Color color="#000" onColorChange={this.props.onColorChange} />
                <Color color="#ff0000" onColorChange={this.props.onColorChange} />
                <Color color="#0000ff" onColorChange={this.props.onColorChange} />
            </div>
        );
    }

}

module.exports = ColorPicker;
