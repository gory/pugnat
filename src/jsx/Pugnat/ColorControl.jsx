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


        return (
            <div className={myClasses} style={myStyles} >
                <textarea disabled={true} value={this.state.value} onChange={this.boundHandleChange} onInput={this.boundHandleChange} />
                <input type='range' min='-10' max='265' value={this.state.value} onChange={this.boundHandleChange} />
            </div>
        );
    }

}

module.exports = ColorControl;
