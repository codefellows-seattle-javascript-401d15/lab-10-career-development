'use strict';

const Node = require('../model/list-node.js');

const SLL = module.exports = function() {
  this.head = null;
};

SLL.prototype.reverse = function(list) {
  let current = list.head;
  let stack = [];

  while (current) {
    stack.push(current);
    current = current.next;
  }

  let result = new SLL();
  result.head = stack.pop();
  current = result.head;
  let node = stack.pop();

  while (node) {
    node.next = null;
    current.next = node;
    current = current.next;
    node = stack.pop();
  }
  return result;
};

SLL.prototype.remove = function(list, value) {
  let current = list.head;
  let previous;
  while (current.val !== value) {
    previous = current;
    current = current.next;
  }
  previous.next = current.next;
  let result = list;
  return result;
};
