'use strict';

let Pugnat = require('Pugnat/Pugnat.jsx');

const root = document.getElementById('root');

let Main = (function() {
	return {
		initialize: function() {
			this.pugnat = new Pugnat(root);
		}
	}

}());

module.exports = Main.initialize();