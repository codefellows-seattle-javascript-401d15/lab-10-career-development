'use strict';

const Node = require('./list-node.js');
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

SLL.prototype.reverse = function() {
  let previous = null;
  let current = this.head;
  let next = null;
  while(current != null) {
    next = current.next; //assigns pointer to head.next
    current.next = previous; //flips current's pointer from next to prev
    previous = current; //moves prev "up one"
    current = next; //moves next "up one"
  }
  this.head = previous;
  return this;
};

// SLL.prototype.remove = function(value) {
//   let current = this.head;
//   let previous;
//   while(current.val !== value) {
//     previous = current;
//     current = current.next;
//   }
//   previous.next = current.next;
//   return this;
// };
//
// SLL.prototype.remove = function(index) {
//   if(this.head === null) return;
//   let temp = this.head;
//   if(index === 0) {
//     this.head = temp.next;
//     return;
//   }
// };
