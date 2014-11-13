var bfrequire = require('../../node_modules/node-brainfuckex/').require;
process.chdir('../../');

var tests = [
	['Hello', 'World'],
	['Foo', 'Foo'],
	['Foo', 'FooBar'],
	['FooBar', 'Foo'],
	['', ''],
	['Foo', ''],
	['', 'Foo']
];

for (var key in tests) {
	var test = bfrequire('sc.bf')(tests[key]);
	console.log('"' + tests[key][0] + '" = "' + tests[key][1] + '" => ' + test[0].charCodeAt(0));
}
