'use strict';

const Node = require('./lib/node.js');
const Sll = require('./lib/sll.js');
const PORT = process.env.PORT || 3000;
let sll = new Sll();

sll.prepend(1);
sll.log();
