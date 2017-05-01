'use strict';

const Node = require('./list-node');
// [val, next]

// (HEAD)[val, next] The list is empty, so we just point the head at the new node

// (HEAD)[val, next] => [val, next] => [val, next] => [val, next] => [val, next]
// Prepend() adds a new node at the HEAD       Append() adds a new node after last node

//O(n)
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

//O(n)
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

//O(n)

SLL.prototype.remove = function(value) {
  // let node = new Node(value);
  if(this.head == null) return;
//if head is what needs to be deleted, then reassign the head position. make head be equal to the node with value head.next
  if(this.head == value) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;

  while(current.next != null) {
    if (current.next.value === value) {
      current.next = current.next.next;
      return;
    }
    current = current.next; //otherwise, continue to iterate until if is met
  }
  //iterate thru the link list and delete one before the element we want to delete. set current nodes next pointer to equal the to-be-deleted values next pointer - you're skipping over the deleted one.

};
