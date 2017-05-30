'use strict';

const Node = require('./model/list-node');

//[val, next];
//(HEAD) [val, next] This list is empty so point the head at the new Node

//(HEAD) [val, next] => [val, next] => [val, next] => [val, next] => [val, next]

//Prepend() adds a new node at the HEAD   append() adds a new node after the last Node

const SLL = module.exports = function() {
  this.head = null;
  this._length = 0;
};

SLL.prototype.prepend = function(value) {
  let node = new Node(value);
  if(!this.head) {
    this.head = node;
    this._length++;
    return this;
  }
  node.next = this.head;
  this.head = node;
  this._length++;
  return this;
};

SLL.prototype.append = function(value) {
  let node = new Node(value);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    this._length++;
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

SLL.prototype.searchNodeAt = function(position) {
  let currentNode = this.head,
    length = this._length,
    count = 1,
    message = {failure: 'Failure: Non existant node at that position in this list'};

  if(length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  while(count < position) {
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
};

SLL.prototype.remove = function(position) {
  let currentNode = this.head,
    length = this._length,
    count = 0,
    beforeNodeToDelete = null,
    nodeToDelete = null,
    deletedNode = null;

  if(position < 0 || position > length) {
    throw new Error(message.failure);
  }

  if(position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode;
  }

  while(count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }
  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
};

SLL.prototype.reverse = function() {
  let newSLL = new SLL();
  while (this.head) {
    newSLL.prepend(this.head.val);
    this.head = this.remove(this.head);
  }
  return newSLL;
};
