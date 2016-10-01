var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

	var processed = postxml([plugin(opts)]).process(input);

	expect(processed).to.eql(output);
};

describe('postxml-icon', function () {
	it('', function () {
		test(
			'<icon class="iconClass">nameOfIcon</icon>',
			'<svg class="iconClass"><use xlink:href="#icon--nameOfIcon"/></svg>',
			{}
		);
	});
});
