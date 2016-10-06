var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

	var processed = postxml([plugin(opts)]).process(input);

	expect(processed).to.eql(output);
};

describe('postxml-icon', function () {
	it('add icon', function () {
		test(
			'<icon class="iconClass">nameOfIcon</icon>',
			'<svg class="iconClass"><use xlink:href="#icon--nameOfIcon"/></svg>',
			{}
		);
	});
	it('add inline icon', function () {
		test(
			'<icon inline>nameOfIcon</icon><symbol id="icon--nameOfIcon"><path d="0,0 100, 100"></path></symbol>',
			'<svg><path d="0,0 100, 100"/></svg><symbol id="icon--nameOfIcon"><path d="0,0 100, 100"></path></symbol>',
			{}
		);
	});
});
