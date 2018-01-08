'use strict';

import React from 'react';

class ColorControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }

        this.boundHandleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        let myValue = e.target.value;
        if(myValue < 0) {
            myValue = 0;
        }
        if (myValue > 255) {
            myValue = 255
        }
        this.setState({value: myValue});

        this.props.update(myValue);
    }

    render() {
        let myClasses = 'control';
        let myStyles = {
        }

        let left = 'rgb(0,0,0)';
        let right = 'rgb(0,0,0)';

        if (this.props.red) {
            left = 'rgb(0, ' + this.props.g + ', ' + this.props.b + ')';
            right = 'rgb(255, ' + this.props.g + ', ' + this.props.b + ')';

        }

        if (this.props.green) {
            left = 'rgb('+ this.props.r + ', 0, ' + this.props.g + ')';
            right = 'rgb('+ this.props.r + ', 255, ' + this.props.g + ')';
        }

        if (this.props.blue) {
            left = 'rgb('+ this.props.r + ', ' + this.props.g + ', 0)';
            right = 'rgb('+ this.props.r + ', '+ this.props.g + ', 255)';
        }

        let leftStyles = {backgroundColor: left};
        let rightStyles = {backgroundColor: right};

        console.log(leftStyles);



        return (
            <div className={myClasses} style={myStyles} >
                <textarea disabled={true} value={this.state.value} onChange={this.boundHandleChange} onInput={this.boundHandleChange} />
                <div className='control-swatch' style={leftStyles}></div>
                <input type='range' min='-10' max='265' value={this.state.value} onChange={this.boundHandleChange} />
                <div className='control-swatch' style={rightStyles}></div>
            </div>
        );
    }

}

module.exports = ColorControl;
