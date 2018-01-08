'use strict';

import React from 'react';

let ColorControl = require('./ColorControl.jsx');

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            r: 0,
            g: 0,
            b: 0
        }

        this.boundSetR = this.setR.bind(this);
        this.boundSetG = this.setG.bind(this);
        this.boundSetB = this.setB.bind(this);

    }


    setR(value) {
        this.setState({r: value});
        this.props.onColorChange(this._getColor());
    }

    setG(value) {
        this.setState({g: value});
        this.props.onColorChange(this._getColor());
    }

    setB(value) {
        this.setState({b: value});
        this.props.onColorChange(this._getColor());
    }

    _getColor() {
        return 'rgb(' + this.state.r + ',' + this.state.g + ',' + this.state.b + ')';
    }

    render() {
        let myClasses = 'betterPicker';
        let myStyles = {
        }

        let myColor = this._getColor();

        let swatchStyles = {
            backgroundColor: myColor
        }

        return (
            <div className={myClasses} style={myStyles} >
                Better Picker
                <div className='swatch' style={swatchStyles}></div>
                <div className='controls'>
                    <ColorControl value={this.state.r} update={this.boundSetR} />
                    <ColorControl value={this.state.g} update={this.boundSetG} />
                    <ColorControl value={this.state.b} update={this.boundSetB} />
                </div>
            </div>
        );
    }

}

module.exports = ColorPicker;
