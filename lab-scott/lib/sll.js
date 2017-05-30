'use strict';

const Node = require('./list-node.js');

const SLL = module.exports = function() {
  // if(node) this.head = node;
  this.head = null;
};

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

SLL.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return this;
  }

  function setLast(){
    if(!node) return;
    lastNode = node;
    setLast(node.next);
  }

  setLast(this.head);
  lastNode.next = node;
  return this;
};

SLL.prototype.remove = function(val) {
  // let head = this.head;
  let current = this.head;

  if(current.val == val){
    if(current.next === null) {
      this.head = null;
      return this;
    }
    this.head = current.next;
    return this;
  }

  findNode(current);

  function findNode(node){
    if(node.next.val == val){
      node.next = node.next.next;
      return this;
    }
    findNode(node.next);
  }

};

SLL.prototype.reverse = function() {
  let current = this.head;
  let preNode;

  while(current) {
    let next = current.next;
    current.next = preNode;
    preNode = current;
    current = next;
  }
  this.head = preNode;

  // let head = this.head;
  //
  // function reverser(node){
  //   if(node.next == null) {
  //
  //     head = node;
  //     return this;
  //   }
  //   reverser(node.next);
  //   let next = node.next;
  //   next.next = node;
  //   node.next = null;
  // }
  // reverser(head);

};

//////////////////////////////////////////////////////

let testList = new SLL();
testList.prepend(5);
testList.prepend(4);
testList.prepend(3);
testList.prepend(2);
testList.prepend(1);

console.log(testList);
testList.reverse();
// testList.remove(2);
console.log(testList);
