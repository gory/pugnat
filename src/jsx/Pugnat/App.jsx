'use strict';

import React from 'react';

let Clock = 			require('./Clock.jsx');
let Welcome = 			require('./Welcome.jsx');
let ActionLink = 		require('./ActionLink.jsx');
let Toggle = 			require('./Toggle.jsx');
let Banner = 			require('./Banner.jsx');
let List = 				require('./List.jsx');
let Form = 				require('./Form.jsx');
let EssayForm = 		require('./EssayForm.jsx');
let FlavorForm =		require('./FlavorForm.jsx');
let Calculator = 		require('./Calculator.jsx');

const numbers = [1, 2, 3, 4, 5];


function App() {
  return (
    <div>
		<Welcome name="gory"/>
		<Clock />
		<Clock />
		<Clock />
		<ActionLink />
		<Toggle />
		<Toggle />
		<Banner />
		<List numbers={numbers}/>
		<Form />
		<EssayForm />
		<FlavorForm />
		<Calculator />
    </div>
  );
}

module.exports = App;