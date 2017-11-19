'use strict';

import React from 'react';


let FancyBorder = function(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

class WelcomeDialog extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }

    render() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">Welcome</h1>
                <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
            </FancyBorder>
        );
    }

}

module.exports = WelcomeDialog;
