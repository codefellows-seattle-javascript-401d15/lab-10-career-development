'use strict';

const Node = require('./node.js');

const Sll = module.exports = function() {
  this._length = 0;
  this.head= null;
};

Sll.prototype.prepend = function(data) {
  let node = new Node(data);

  if(!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  this._length++;
  return this;
};

Sll.prototype.append = function(data) {
  let node = new Node(data);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  lastNode.next = null;
  this._length++;
  return this;

  function _setLastNode(node) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

Sll.prototype.remove = function(nodeVal) {
  let current = this.head;
  let previous = null;

  if(current.val === nodeVal) {
    this.head = current.next;
    current= null;
    this._length--;
  }

  if(current.val !== nodeVal) {
    previous = current;
    current = current.next;
  } else {
    previous.next = previous.next.next;
    this._length--;
  }
};

Sll.prototype.log = function() {
  let output = '[';
  let current = this.head;

  while(current !== null) {
    output += current.val;
    if(current.next !== null) {
      output += ', ';
    }
    current = current.next;
  }

  output += ']';
  console.log(output);
};
