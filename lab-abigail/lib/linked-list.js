'use strict';

const Node = require('./list-node');

const SLL = module.exports = function() {
  this.head = null;
};

SLL.prototype.prepend = function(value) {
  let node = new Node(value);
  if(!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
};

SLL.prototype.append = function(value) {
  let node = new Node(value);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return this;

  function _setLastNode(node) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

SLL.prototype.reverse = function(value) {
  let node = new Node(value);
  let head = node.head;
  const originLast = node.lastNode;
  let current = head;

  while(head != originLast) {
    let pointer = current.next;
    pointer = head;
  }
  return node;
};
