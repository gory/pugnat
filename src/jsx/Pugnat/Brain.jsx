'use strict';

import React from 'react';

let Box = require('./Box.jsx');
let ColorPicker = require('./ColorPicker.jsx');
let BetterPicker = require('./BetterPicker.jsx');

class Brain extends React.Component {
    constructor(props) {
        super(props);

        this.boxes = 25*25;
        this.state = {colors: [], color: "#fff", mouseDown: false};
        this.boundHandleColor = this.handleColor.bind(this);
        this.boundHandleMouseDown = this.handleMouseDown.bind(this);
        this.boundHandleMouseUp = this.handleMouseUp.bind(this);
        this.boundHandleMouseOver = this.handleMouseOver.bind(this);
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
            myBoxes.push(
                <Box 
                    key={x.toString()} 
                    id={x.toString()} 
                    color={colors[x]} 
                    handleMouseOver={this.boundHandleMouseOver}
                    handleMouseDown={this.boundHandleMouseDown} 
                    handleMouseUp={this.boundHandleMouseUp}/>);
        }

        return myBoxes;
    }

    handleMouseDown(id) {
        let myColors = this.replaceColor(id);
        this.setState({colors: myColors, mouseDown: true});
    }

    handleMouseUp() {
        this.setState({mouseDown: false});
    }

    replaceColor(id) {
        let myColors = this.state.colors.slice();
        myColors[id] = this.state.color;
        return myColors;
    }

    handleMouseOver(id) {
        if(this.state.mouseDown) {
            let myColors = this.replaceColor(id);
            this.setState({colors: myColors});
        }
    }

    handleColor(newColor) {
        this.setState({color: newColor});
    }

    render() {
        let classes = 'brain';
        let boxes = this.makeBoxes(this.state.colors);
        return (
            <div>
                <div className={classes}>
                    {boxes}
                </div>
                <ColorPicker onColorChange={this.boundHandleColor}/>
                <BetterPicker onColorChange={this.boundHandleColor}/>
            </div>

        );
    }

}

module.exports = Brain;
