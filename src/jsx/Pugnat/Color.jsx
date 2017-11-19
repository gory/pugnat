'use strict';

import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);

        this.boundHandleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target);
        console.log(this.props);
        console.log('props!!')

        this.props.onColorChange(this.props.color);
    }



    render() {
        let myClasses = 'color';
        let color = this.props.color
        let myStyles = {
            backgroundColor: color
        }

        return (
            <div className={myClasses} style={myStyles} value={color}
            onClick={this.boundHandleClick}/>
        );
    }

}

module.exports = Color;
