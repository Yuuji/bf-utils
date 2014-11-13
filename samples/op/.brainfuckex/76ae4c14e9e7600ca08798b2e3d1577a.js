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
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
while (bf.getMem()) {
while (bf.getMem()) {

bf.move(3);
var ret = bf.add(1); if (ret!==false) { return ret; }
bf.move(-3);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.move(-1);
}

while (bf.getMem()) {

var ret =bf.add(-1); if (ret!==false) { return ret; }
}

var ret = bf.add(10); if (ret!==false) { return ret; }
while (bf.getMem()) {

bf.move(1);
var ret = bf.add(10); if (ret!==false) { return ret; }
bf.move(1);
var ret = bf.add(11); if (ret!==false) { return ret; }
bf.move(-2);
var ret =bf.add(-1); if (ret!==false) { return ret; }
}

bf.debug();
var ret =bf.add(-4); if (ret!==false) { return ret; }
while (bf.getMem()) {

var ret = bf.add(4); if (ret!==false) { return ret; }
bf.output();
bf.move(1);
var ret =bf.add(-4); if (ret!==false) { return ret; }
}

var ret = bf.add(4); if (ret!==false) { return ret; }
}

module.exports = bfCall