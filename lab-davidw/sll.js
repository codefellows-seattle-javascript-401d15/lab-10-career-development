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
  let next;

  while(current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  this.head = previous;
};


SLL.prototype.remove = function(val) {
  if(this.head.val === val) {
    this.head = this.head.next;
    return;
  }

  let previous = null;
  let current = this.head;

  while(current.val !== val) {
    previous = current;
    current = current.next;
  }

  previous.next = current.next;
};
