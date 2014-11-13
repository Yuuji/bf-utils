var bfrequire = require('../../node_modules/node-brainfuckex/').require;
process.chdir('../../');
var returnValue = bfrequire('gp.bf')(['3', 'Foo', 'Bar', 'Hello', 'World']);
console.log('returnValue: ' + returnValue);
