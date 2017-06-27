'use strict'

const Node = require('./model/node')
const SLL = require('./model/sll')

let newSLL = new SLL();
newSLL.append(1);
newSLL.append(2);
newSLL.append(3);
newSLL.append(4);
newSLL.append(5);
console.log(newSLL);
console.log(newSLL.reverse())
