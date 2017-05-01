'use strict';

const Node = require('./list-node.js');

const SLL = module.exports = function(){
  this.head = null;
};
//O(n)
SLL.prototype.prepend = function(value){
  let node = new Node(value);
  if(!this.head){
    this.head = node;
    return this;
  }
  node.next = this.head;
  this.head = node;
  return this;
};

//O(n)
SLL.prototype.append = function(value){
  let node = new Node(value);
  let lastNode =  null;

  if(!this.head){
    this.head = node;
    return this;
  }
  _setLastNode(this.head);
  lastNode.next = node;
  return this;

  function _setLastNode(node){
    if(!node)return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

SLL.prototype.reverse = function(){
  let current = this.head;
  let previous = null;
  let next;

  while(current){
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
};

//O(n)
SLL.prototype.remove = function(value){
  if(this.head.val === value){
    this.head = this.head.next;
  } else {
    let previousNode = this.head;
    let currentNode = previousNode.next;
    while(currentNode){
      if(currentNode === value){
        previousNode.next = currentNode.next;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
};
