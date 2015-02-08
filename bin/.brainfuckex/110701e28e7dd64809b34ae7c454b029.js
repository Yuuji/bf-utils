var bfCall = function(bf, bfe, parameters, output, input) {
bf.init(bfe, parameters, output, input);

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
while (bf.getMem()) {
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
var ret = bf.add(5); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(-1);
var ret = bf.add(5); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret = bf.add(2); if (ret!==false) { return ret; }
bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
bf.move(4);
while (bf.getMem()) {

bf.move(1);
}

bf.move(-1);
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(5);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-5);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
}

bf.move(6);
while (bf.getMem()) {

bf.move(1);
}

bf.move(-1);
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(3);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-3);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
}

bf.move(-4);
while (bf.getMem()) {

bf.move(6);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-6);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-4);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

var ret = bf.add(10); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(9); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(9); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(6); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(6); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(5); if (ret!==false) { return ret; }
bf.move(-8);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(2);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(3); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(3); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(5); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(2); if (ret!==false) { return ret; }
bf.move(2);
var ret =bf.add(-4); if (ret!==false) { return ret; }
bf.move(3);
var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
while (bf.getMem()) {

bf.move(1);
}

bf.move(-1);
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(2);
while (bf.getMem()) {

var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
}

bf.move(2);
while (bf.getMem()) {

bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
}

bf.move(-3);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(2);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
while (bf.getMem()) {

bf.move(2);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(3);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(1);
}

var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(3);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(1);
}

bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(3);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
var ret =bf.add(-4); if (ret!==false) { return ret; }
bf.move(1);
while (bf.getMem()) {

bf.move(1);
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(-1);
}

bf.move(1);
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
}

var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
while (bf.getMem()) {

bf.move(-2);
}

bf.move(-3);
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(2);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
}

bf.move(3);
while (bf.getMem()) {

bf.move(1);
}

bf.move(1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(4);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-4);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(4);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-4);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(4);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-4);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(3);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-3);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret = bf.add(10); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(-5);
bf.output();
bf.move(5);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-7);
bf.output();
bf.move(12);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
while (bf.getMem()) {

bf.move(2);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
bf.move(-5);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

var ret = bf.add(10); if (ret!==false) { return ret; }
bf.move(1);
while (bf.getMem()) {

bf.move(-5);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(5);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-5);
while (bf.getMem()) {

bf.move(4);
while (bf.getMem()) {

bf.move(-3);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-2);
while (bf.getMem()) {

bf.move(2);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(2);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-3);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(3);
while (bf.getMem()) {

bf.move(-3);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(3);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(4);
var ret =bf.add(-1); if (ret!==false) { return ret; }
bf.move(-4);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}
}

var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(4);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-5);
}

bf.move(4);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
bf.move(-8);
bf.output();
bf.move(8);
while (bf.getMem()) {

bf.move(-10);
bf.output();
bf.move(10);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-7);
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(2);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
}

bf.move(3);
while (bf.getMem()) {

bf.move(1);
}

bf.move(5);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
while (bf.getMem()) {

bf.move(-6);
bf.output();
bf.move(6);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
bf.move(-9);
bf.output();
bf.move(-2);
bf.output();
bf.move(-2);
bf.output();
bf.move(13);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

var ret = bf.add(10); if (ret!==false) { return ret; }
bf.move(1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
}

bf.move(-1);
while (bf.getMem()) {

var ret = bf.add(1); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
}

bf.move(-1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-2);
}

bf.move(5);
}

bf.move(-9);
bf.output();
bf.move(9);
bf.move(-2);
while (bf.getMem()) {

bf.move(-9);
bf.output();
bf.move(9);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(2);
bf.move(-14);
bf.output();
bf.move(14);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-1);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
}

bf.move(3);
while (bf.getMem()) {

bf.move(1);
}

bf.move(6);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
}

module.exports = bfCall