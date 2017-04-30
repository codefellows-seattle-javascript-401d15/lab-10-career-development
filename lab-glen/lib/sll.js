'use strict';

const Node = require('./node.js');

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.size = function () {
  let current = this.head;
  let count = 0;

  while(current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

LinkedList.prototype.prepend = function (value) {
  let node = new Node(value);
  if(!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
};

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
};

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
};

// O(n) where n is the number of nodes in the linked list
LinkedList.prototype.reverse = function () {
  var previous = null;
  var current = this.head;
  var next;

  while(current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
};

LinkedList.prototype.contains = function (val) {
  var current = this.head;
  while(current !== null); {
    if(current.val === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

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

exports.module.LinkedList = LinkedList;
