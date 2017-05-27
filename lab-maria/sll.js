'use strict';

const Node = require('./node');

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

/*
The following function is form http://www.oyewiki.com/tech/linked-list-size-or-count-in-javascript
they are badasses and I literally could not have done this without their help
I actually found this recursive method to be easier to read/understand at first glance
than the interative one
*/

SLL.prototype.getCountByRecursion = function() {
  //Check if head is null
  if(this.head == null){
    console.log('head is null; length is 0');
    return;
  }
  //initialise count as 0 and take n as this.head
  let n = this.head;
  let count = 0;
  incrementCount(n);

  function incrementCount(n){
    if(n == null) return;
    count++;
    incrementCount(n.next);
  }
  return count;
};

SLL.prototype.remove = function(node) {
  if(this.head == null) return;
  let previous;
  let current = this.head;
  let wanted = node;
  findNode(current, wanted);
  function findNode(current, wanted){
    if(current.val === wanted) {
      previous.next = current.next;
      return;
    }
    previous = current;
    findNode(current.next, wanted);
  }
  return this;
};

SLL.prototype.reverse = function() {
  if (this.head === null) return;
  let current = this.head;
  let previous = null;
  let next;

  let count = this.getCountByRecursion();

  function reversethisfuckingshit() {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  for(let i = 0; i < count; i++) {
    reversethisfuckingshit();
  }
  this.head = previous;
  return this;
};


SLL.prototype.findNthNode = function(index) {
  if(this.head == null) return;
  let n = this.head;
  let count = 1;
  let length = this.getCountByRecursion();
  for(let i=0; i < length; i ++) {
    if(count === index) {
      return n.val;
    }
    count++;
    n = n.next;
  }
};

SLL.prototype.findMiddleNode = function() {
  if(this.head == null) return;
  let n = this.head;
  let length = this.getCountByRecursion();
  let count = 1;

  if(length % 2 === 0) {
    let middles = [];
    let firstMiddle = length/2;
    let secondMiddle = length/2 + 1;
    for(let i=0; i < length; i ++) {
      if(middles.length === 2) return middles;
      if(count === firstMiddle) {
        middles.push(n.val);
      }
      if(count === secondMiddle) {
        middles.push(n.val);
      }
      count++;
      n = n.next;
    }
  } else{
    let middle = length/2 + 0.5;
    for(let i=0; i < length; i ++) {
      if(count === middle) {
        return n.val;
      }
      count++;
      n = n.next;
    }
  }
};
