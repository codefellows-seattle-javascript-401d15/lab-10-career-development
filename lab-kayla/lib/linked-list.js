'use strict';

const Node = require('./reverse');

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

SLL.prototype.remove = function(val){
  let current = this.head;
  if(current.val === val){
    this.head = current.next;
  }
  else {
    let last = current;
    while(current.next){
      if(current.val === val){
        last.next = current.next;
        return;
      }
      last = current;
      current = current.next;
    }
    if(current.val === val){
      last.next === null;
    }
  }
};

SLL.prototype.reverse = function() {
  let next;
  let current = this.head;
  let previousNode = null;

  while(current) {
    next = current.next;
    current.next = previousNode;
    previousNode = current;
    current = next;
  }
  this.head = previousNode;
};
