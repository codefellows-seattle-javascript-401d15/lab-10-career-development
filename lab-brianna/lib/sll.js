'use strict';

const Node = require('./list-node');

const SLL = module.exports = function () {
  this.head = null;
};

// O(n)
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

// 0(n)
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

//0(1)
SLL.prototype.remove = function(value) {
   let current = this.head;

   if(this.head.val === value) this.head = this.head.next;

   let nextNode = current.next;

   if (current.next.val == value) {
     current.next = nextNode.next;
     return;
   } else {
     current = nextNode;
     nextNode = nextNode.next;
     return;
   }
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
