'use strict';

import React from 'react';

let Box = require('./Box.jsx');
let BetterPicker = require('./BetterPicker.jsx');

class Brain extends React.Component {
    constructor(props) {
        super(props);

        this.dimension = 25;
        this.boxes = this.dimension * this.dimension;
        this.state = {colors: [], r:255, g:255, b:255, color:'rgb(255,255,255)', mouseDown: false};
        this.boundHandleColor = this.handleColor.bind(this);
        this.boundHandleMouseDown = this.handleMouseDown.bind(this);
        this.boundHandleMouseUp = this.handleMouseUp.bind(this);
        this.boundHandleMouseOver = this.handleMouseOver.bind(this);
        this.boundHandleTouchMove = this.handleTouchMove.bind(this);

        this.height = 0;
        this.width = 0;
        this.offsetTop = 0;
        this.boxHeight = 0;
        this.boxWidth = 0;
    }

    componentDidMount() {
        let myColors = this.initColors();

        this.setState({colors: myColors});

        this.queryDom();

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
            let myBox = <Box
                        key={x.toString()}
                        id={x.toString()}
                        color={colors[x]}
                        handleMouseOver={this.boundHandleMouseOver}
                        handleMouseDown={this.boundHandleMouseDown}
                        handleMouseUp={this.boundHandleMouseUp}/>;
            myBoxes.push(myBox);
        }

        return myBoxes;
    }

    queryDom() {
        let myElement = document.querySelector('[data-pugnat]');
        this.height = myElement.clientHeight;
        this.width = myElement.clientWidth;
        this.offsetTop = myElement.offsetTop;
        this.boxHeight = this.height / this.dimension;
        this.boxWidth = this.width / this.dimension;
    }

    handleMouseDown(id) {
        let myColors = this.replaceColor(id);
        this.setState({colors: myColors, mouseDown: true});
    }

    handleMouseUp() {
        this.setState({mouseDown: false});
    }

    handleMouseOver(id) {
        if(this.state.mouseDown) {
            let myColors = this.replaceColor(id);
            this.setState({colors: myColors});
        }
    }

    handleTouchMove(e) {
        let touches = e.touches;
        let lt = touches.length;
        for (let i = 0; i < lt; i++) {
            let touch = touches[i];
            let x = touch.clientX;
            let y = touch.clientY;
            let myColors = this.replaceColor(this.touchToId(x, y));
            this.setState({colors: myColors});
        }
    }

    map(value) {
        let mappedValue = value * (this.dimension - 1) / this.height;
        let ceiling = Math.ceil(mappedValue);
        return this.clamp(ceiling);
    }

    clamp(value) {
        if (value < 1) {
            return 1;
        }

        if (value > this.dimension) {
            return this.dimension;
        }

        return value
    }

    touchToId(x, oldY) {
        console.log('x :: ' + x + '    y :: ' + oldY);
        let y = oldY - this.offsetTop;

        let row = this.map(y);
        let col = this.map(x);

        console.log('row :: ' + row + '    col :: ' + col);

        let id = ((row - 1) * 25) + col;

        console.log(id);

        return id;

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
                <div className={classes} onTouchMove={this.boundHandleTouchMove} data-pugnat>
                    {boxes}
                </div>
                <div className='swatch' style={swatchStyle} />
                <BetterPicker r={this.state.r} g={this.state.g} b={this.state.b} onColorChange={this.boundHandleColor}/>
            </div>

        );
    }

}

module.exports = Brain;
