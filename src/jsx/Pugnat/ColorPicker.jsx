'use strict';

import React from 'react';

let Color = require('./Color.jsx');


class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.colors = this.makeColors();

    }

    render() {
        let myClasses = 'colorpicker';
        let myStyles = {
        }

        return (
            <div className={myClasses} style={myStyles} >
                {this.colors}
            </div>
        );


    }

    makeColors() {
        let values = ['00', '3f', '7f', 'bf', 'ff'];
        let l = values.length;
        let r = 0;
        let g = 0;
        let b = 0;

        let myColors = [];

        while (r < l) {
            let red = values[r];
            while(g < l) {
                let green = values[g];
                while(b < l) {
                    let blue = values[b];

                    let color = '#' + red + green + blue

                    myColors.push(
                        <Color color={color} key={b + (g * 100) + (r * 10000)} onColorChange={this.props.onColorChange} />
                    );

                    b = b + 1;
                }
                b = 0;
                g = g + 1;
            }

            b = 0;
            g = 0;
            r = r + 1;
        }

        return myColors;
    }

}

module.exports = ColorPicker;
