var bfrequire = require('../../node_modules/node-brainfuckex/').require;
process.chdir('../../');

for (var i=1; i<=4; i++) {
	bfrequire('op.bf')([i.toString(), 'Foo', 'Bar', 'Hello', 'World']);
	console.log('');
}
