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
        this.boundHandleTouchStart = this.handleTouchStart.bind(this);

        this.height = 0;
        this.width = 0;
        this.offsetTop = 0;
        this.boxHeight = 0;
        this.boxWidth = 0;
        this.element = null;
    }

    componentDidMount() {
        let myColors = this.initColors();

        this.setState({colors: myColors});

        this.queryDom();

        window.addEventListener('resize', this.queryDom.bind(this));

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.queryDom.bind(this));
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
        this.element = myElement;
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
        e.preventDefault();
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

    handleTouchStart(e) {
        e.preventDefault();
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
        let y = oldY - this.offsetTop;

        let row = this.map(y);
        let col = this.map(x);

        let id = ((row -1 ) * this.dimension) + (col-1);

        return id;
    }

    //Accept an array of ids?
    replaceColor(id) {
        let myColors = this.state.colors.slice();
        myColors[id] = this.state.color;
        return myColors;
    }

    handleColor(newColor) {
        this.setState({color: newColor});
    }

    render() {
        let boxes = this.makeBoxes(this.state.colors);
        let swatchStyle = {backgroundColor: this.state.color};

        return (
            <div className='brain-wrapper'>
                <div className='brain' data-pugnat onTouchStart={this.boundHandleTouchStart} onTouchMove={this.boundHandleTouchMove}>
                    {boxes}
                </div>
                <div className='tools'>
                    <div className='swatch' style={swatchStyle} />
                    <BetterPicker r={this.state.r} g={this.state.g} b={this.state.b} onColorChange={this.boundHandleColor}/>
                </div>
            </div>

        );

    }

}

module.exports = Brain;
