'use strict';

const Node = require('./model/list-node.js');
const SLL = require('./lib/sll.js');

let sll = new SLL();
sll.head = new Node(1);
sll.head.next = new Node(2);
sll.head.next.next = new Node(3);
sll.head.next.next.next = new Node(4);

let reversed = sll.reverse(sll);
console.log(reversed);
