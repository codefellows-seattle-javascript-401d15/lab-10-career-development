'use strict';

const Node = require('./list-node');

const SLL = module.exports = function() {
  this._length = 0;
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

SLL.prototype.reverse = function() {
  const node = new Node();
  let head = this.head;
  let pointer = null;
  const originLast = this.lastNode;
  let current = head;

  while(head != originLast) {
    pointer = current.next;
    pointer = head;
  }
  return node;
};

// Resource used for reference: https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
SLL.prototype.remove = function(value) {
  let current = this.head;
  let length = this._length;
  let count = 0;
  let beforeNodeToDelete = null;
  let nodeToDelete = null;
  let deletedNode = null;

  if(value < 0 || value > length) {
    console.error();
  }

  if (value === 1) {
    this.head = current.next;
    deletedNode = current;
    current = null;
    this._length--;

    return deletedNode;
  }

  while (count < value) {
    beforeNodeToDelete = current;
    nodeToDelete = current.next;
    count ++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;

};
