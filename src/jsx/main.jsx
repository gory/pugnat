'use strict';

let Pugnat = require('Pugnat/Pugnat.jsx');

const reactRoot = document.getElementById('root');

let Main = (function() {
	return {
		initialize: function() {
			this.pugnat = new Pugnat(reactRoot);
		}
	}

}());

module.exports = Main.initialize();
