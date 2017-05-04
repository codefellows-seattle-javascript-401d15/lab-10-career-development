'use strict';

const Node = require('./list-node');

const SLL = module.exports = function () {
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
    return;
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

SLL.prototype.remove = function(){

};

SLL.prototype.reverse = function() {
  if(!this.head || !this.head.next) return;
  let placeOne = null;
  let placeTwo = this.head;
  let placeThree;
  while (placeTwo) {
    placeThree = placeTwo.next;
    placeTwo.next = placeOne;
    placeOne = placeTwo;
    placeTwo = placeThree;
  }
  this.head = placeOne;
};
