'use strict';

const Node = require('./node.js');

//O(n)
const LinkedList = module.exports =  function () {
  this.head = null;
  this.tail = null;
  this.listLength = 0;
};

//O(n)
LinkedList.prototype.size = function () {
  let current = this.head;
  let count = 0;

  while(current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

//O(1)
LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

//O(1)
LinkedList.prototype.prepend = function (value) {
  let node = new Node(value);
  if(!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  this.listLength++;
  return this;
};

//O(1)
LinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if(!this.head) {
    this.head = node;
    return this;
  }

  var current = this.head;

  while(current.next !== null) {
    current = current.next;
  }
  current.next = node;
  this.listLength++;
};

//O(n)
LinkedList.prototype.findNthNode = function(value) {
  let current = this.head;
  let count = 0;

  if(value > this.length) {
    return 'Does not exist';
  }

  while(count < value) {
    current = current.next;
    count++;
  }

  return current;
};

//O(n)
LinkedList.prototype.findMiddleNode = function() {
  let pointerTwo = this.head;
  let pointerOne = this.head;

  while(pointerTwo.next !== null && pointerTwo.next.next !== null) {
    pointerTwo = pointerTwo.next.next;
    pointerOne = pointerOne.next;
  }
  return pointerOne;
};

//O(1)
LinkedList.prototype.remove = function(val) {
  if(this.head.val === val) {
    this.head = this.head.next;
    return;
  }

  let previous = null;
  let current = this.head;

  while(current.val !== val) {
    previous = current;
    current = current.next;

  }
  previous.next = current.next;
  this.tail = current.next;
};

// O(n) where n is the number of nodes in the linked list
LinkedList.prototype.reverse = function () {
  let previous = null;
  let current = this.head;
  let next;

  while(current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
};

//O(1)
LinkedList.prototype.contains = function (val) {
  let current = this.head;
  while(current !== null); {
    if(current.val === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

//O(1)
LinkedList.prototype.print = function () {
  let output = '[';
  let current = this.head;

  while (current !== null) {
    output += current.val;
    if(current.next !== null) {
      output += ',';
    }
    current = current.next;
  }

  output += ']';
  console.log(output);
};
