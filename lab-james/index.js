'use strict';

const Node = require('./lib/node.js');
const Sll = require('./lib/sll.js');
const PORT = process.env.PORT || 3000;
let sll = new Sll();

sll.prepend(1);
sll.append(2);
sll.append(3);
sll.append(4);

sll.remove(4);
sll.reverse();

sll.log();
