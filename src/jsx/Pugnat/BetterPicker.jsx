'use strict';

import React from 'react';

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


    setR(e) {
        console.log(e);
    }

    setG(e) {
        console.log(e);
    }

    setB(e) {
        console.log(e);
    }

    render() {
        let myClasses = 'betterPicker';
        let myStyles = {
        }

        let myColor = 'rgb(' + this.state.r + ',' + this.state.g + ',' + this.state.b + ')';

        let swatchStyles = {
            backgroundColor: myColor
        }

        return (
            <div className={myClasses} style={myStyles} >
                Better Picker
                <div className='swatch' style={swatchStyles}></div>
                <div className='controls'>
                    <input type='range' onChange={this.setR} />
                    <input type='range' onChange={this.setG} />
                    <input type='range' onChange={this.setB} />
                </div>
            </div>
        );
    }

}

module.exports = ColorPicker;
