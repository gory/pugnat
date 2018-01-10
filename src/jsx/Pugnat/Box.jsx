'use strict';

import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props);

        this.boundHandleOver = this.handleOver.bind(this);
        this.boundHandleDown = this.handleDown.bind(this);
        this.boundHandleUp = this.handleUp.bind(this);
        this.boundHandleTouchMove = this.handleTouchMove.bind(this);
    }

    handleOver(e) {
        e.preventDefault();
        this.props.handleMouseOver(this.props.id);
    }

    handleDown(e) {
        e.preventDefault();
        this.props.handleMouseDown(this.props.id);
    }

    handleUp(e) {
        e.preventDefault();
        this.props.handleMouseUp(this.props.id);
    }

    handleTouchMove(e) {
        console.log('box ' + this.props.id);
        this.props.handleTouchMove(this.props.id);
    }

    render() {
        let myClasses = 'box';
        let myColor = this.props.color || "#000";
        let myStyles = {
            backgroundColor: this.props.color
        }

        return (
            <div
                className={myClasses}
                style={myStyles}
                onMouseOver={this.boundHandleOver}
                onMouseDown={this.boundHandleDown}
                onMouseUp={this.boundHandleUp}
                onTouchStart={this.boundHandleTouchMove}
            >
                <a href="">
                    <div></div>
                </a>
            </div>
        );
    }

}

module.exports = Box;
