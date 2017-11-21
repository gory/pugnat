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
                <Color color="#fff" handleColor={this.props.handleColor} boundSet={this.props.boundSet}/>
                <Color color="#000" handleColor={this.props.handleColor} boundSet={this.props.boundSet}/>
                <Color color="#ff0000" handleColor={this.props.handleColor} boundSet={this.props.boundSet}/>
                <Color color="#0000ff" handleColor={this.props.handleColor} boundSet={this.props.boundSet}/>
            </div>
        );
    }

}

module.exports = ColorPicker;
