'use strict';

import React from 'react';

let Box = require('./Box.jsx');
let BetterPicker = require('./BetterPicker.jsx');

class Brain extends React.Component {
    constructor(props) {
        super(props);

        this.boxes = 25*25;
        this.state = {colors: [], r:0, g:0, b:0, color:'rgb(0,0,0)', mouseDown: false};
        this.boundHandleColor = this.handleColor.bind(this);
        this.boundHandleMouseDown = this.handleMouseDown.bind(this);
        this.boundHandleMouseUp = this.handleMouseUp.bind(this);
        this.boundHandleMouseOver = this.handleMouseOver.bind(this);
        this.boundHandleTouchMove = this.handleTouchMove.bind(this);
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
                    handleMouseUp={this.boundHandleMouseUp}
                    handleTouchMove={this.boundHandleTouchMove}/>);
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

    handleTouchMove(id) {
        let myColors = this.replaceColor(id);
        this.setState({colors: myColors});
    }

    handleMouseOver(id) {
        if(this.state.mouseDown) {
            let myColors = this.replaceColor(id);
            this.setState({colors: myColors});
        }
    }

    replaceColor(id) {
        let myColors = this.state.colors.slice();
        myColors[id] = this.state.color;
        return myColors;
    }

    handleColor(newColor) {
        this.setState({color: newColor});
    }

    render() {
        let classes = 'brain';
        let boxes = this.makeBoxes(this.state.colors);
        let myStyle = {width: '100%', maxWidth: '414px'};
        let swatchStyle = {backgroundColor: this.state.color};
        return (
            <div style={myStyle}>
                <div className={classes}>
                    {boxes}
                </div>
                <div className='swatch' style={swatchStyle} />
                <BetterPicker r={this.state.r} g={this.state.g} b={this.state.b} onColorChange={this.boundHandleColor}/>
            </div>

        );
    }

}

module.exports = Brain;
