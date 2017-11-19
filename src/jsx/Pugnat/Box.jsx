'use strict';

import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props);

        this.boundHandleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('Box ' + this.props.id + ' was clicked.');
    }

    render() {
        let myClasses = 'box';
        let myColor = this.props.color || "#000";
        let myStyles = {
            backgroundColor: this.props.color
        }

        return (
            <div className={myClasses} style={myStyles} onClick={this.boundHandleClick}>
                <a href="">
                    <div></div>
                </a>
            </div>
        );
    }

}

module.exports = Box;
