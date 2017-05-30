'use strict';

const Node = require('./list-node');

const SLL = module.exports = function() {
  this.head = null;
};

SLL.prototype.print = function () {
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

SLL.prototype.remove = function(val) {
  if(this.head.val === val) {
    this.head = this.head.next;
    return;
  }

  let prev = null;
  let node = this.head;
  while (node.val !== val){
    prev = node;
    node = node.next;
  }
  prev.next = node.next;
  this.end = node.next;
}

SLL.prototype.prepend = function(value) {
  let node = new Node(value);
  if (!this.head) {
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


SLL.prototype.reverse = function () {
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

let ll = new SLL();
ll.append(5);
ll.append(10);
ll.append(15);
ll.append(20);
ll.append(25);
ll.prepend(30);

ll.reverse();
ll.remove(10);
ll.print();
