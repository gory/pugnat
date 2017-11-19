'use strict';

import React from 'react';

let Box = require('./Box.jsx');
let Color =   require('./Color.jsx');

class Brain extends React.Component {
    constructor(props) {
        super(props);

        this.boxes = 16;
        this.state = {colors: [], color: "#fff"};
        this.boundHandleColor = this.handleColor.bind(this);
        // this.boundSetState = this.setState.bind(this);
    }

    componentDidMount() {
        let myColors = this.initColors();

        this.setState({colors: myColors});
    }

    initColors() {
        let myColors = [];

        for (let x = 0; x < this.boxes; x++) {
            myColors.push("#000");
        }

        return myColors;
    }

    makeBoxes(colors) {
        let myBoxes = [];

        for (let x = 0; x < this.boxes; x++) {
            let myColor = colors[x];
            myBoxes.push(<Box key={x.toString()} id={x.toString()} color={colors[x]}/>)
        }

        return myBoxes;
    }

    onBoxClick(id) {
        console.log('BOX ' + id + ' was clicked bitch');
    }

    handleColor(newColor) {
        console.log('ok ::  ' + newColor)
        this.setState({color: newColor});
    }

    render() {
        let classes = 'brain';
        let boxes = this.makeBoxes(this.state.colors);
        return (
            <div>
                <h2>{this.state.color}</h2>
                <div className={classes}>
                    {boxes}
                </div>
                <div className="colorpicker">
                    <Color color="#000" onColorChange={this.boundHandleColor}/>
                    <Color color="#fff" onColorChange={this.boundHandleColor}/>
                    <Color color="#ff0000" onColorChange={this.boundHandleColor}/>
                    <Color color="#0000ff" onColorChange={this.boundHandleColor}/>
                </div>
            </div>

        );
    }

}

module.exports = Brain;
