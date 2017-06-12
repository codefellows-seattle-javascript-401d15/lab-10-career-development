'use strict';

const Node = require('./list-node');

// For prototype methods that will export on the constructor.
const SLL = module.exports = function() {
  this.head = null;
};

// NOTE: O(n)
// Prepend() adds a new node at the HEAD.
// Create new node, check to see if node is empty.
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

// Append() adds a new node after last node.
// Traverse list to end of node, to add new node.
SLL.prototype.append = function(value) {
  // Create node.
  let node = new Node(value);
  // Holds value of next node until the end.
  let lastNode = null;

  // Does head exist?
  if(!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return this;

  // Recursive solution.
  function _setLastNode(node) {
    // Check if node exists.
    if(!node) return;
    lastNode = node;
    // Pass in head of list for starting point.
    _setLastNode(node.next);
  }
};

// Input: takes in SLL as argument.
// Output: returns new reversed list.
SLL.prototype.reverse = function() {
  let newSLL = new SLL();
  while (this.head) {
    newSLL.prepend(this.head.val);
    this.head = this.remove(this.head);
  }
  return newSLL;
};

SLL.prototype.remove = function(node) {
  node = node.next;
  return node;
};
