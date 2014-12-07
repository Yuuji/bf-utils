var bfrequire = require('../../node_modules/node-brainfuckex/').require;
process.chdir('../../');

var testStr = 'Hello World';
console.log('Brainfuck code for ' + testStr + ' is:');
bfrequire('s2bf.bf')([testStr]);
