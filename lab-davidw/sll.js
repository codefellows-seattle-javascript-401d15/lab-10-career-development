'use strict';

const Node = require('./node');

const SLL = module.exports = function() {
  this.head = null;
};

// O(n)
SLL.prototype.prepend = function (val) {
  let node = new Node(val);

  if(!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
};

//O(n)
SLL.prototype.append = function(val) {
  let node = new Node(val);
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

//O(n)
SLL.prototype.reverse = function() {
  let current = this.head;
  let previous = null;
  let nextNode;

  while(current !== null) {
    nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  this.head = previous;
  return this.head;
};
