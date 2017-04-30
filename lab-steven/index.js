'use strict';

const Node = require('./lib/nodeCreator.js');

const SLL = module.exports = function(){
  this.head = null;
};
//O(n)
SLL.prototype.prepend = function(val){
  let node = new Node(val);
  if(!this.head){
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
};
//O(n)
SLL.prototype.append = function(val){
  let node = new Node(val);
  let lastNode = null;

  if(!this.head){
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return this;

  function _setLastNode(node){
    if (!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

//O(n)
SLL.prototype.removeNode = function(node){
  let nextNode = node.next;
  let prevNode = null;

  if (this.head === node) {
    this.head = null;
    return this;
  }

  _findPrev(this.head);
  prevNode.next = nextNode;
  return this;

  function _findPrev(pNode){  //check each node from head to see if pNode.next === node
    if (pNode.next === node) return;
    prevNode = pNode.next;
    _findPrev(pNode.next);
  }
};

SLL.prototype.reverse = function(){

}
