var bfrequire = require('../../node_modules/node-brainfuckex/').require;
process.chdir('../../');

var tests = [
	'',
	'123',
	'1234',
	'Hello World'
];

for (var key in tests) {
	var testStr = tests[key];
	var testResult = bfrequire('sl.bf')([testStr]);
	
	// this is special for js code. We don't need it in bf code
	var testLength = 0;
	if (testResult.length === 2) {
		testLength = 3;
	} else if (testResult[0].length === 0) {
		testLength = 4;
	} else {
		testLength = testResult[0].charCodeAt(0);
	}
	
	console.log('sl("' + testStr + '") = ' + testLength);
}
