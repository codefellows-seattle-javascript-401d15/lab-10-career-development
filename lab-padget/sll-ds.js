'use strict';

// TODO: complete the Linked List data structure by adding a remove(node) method.

// let node;
let head;

function append() {
  if (head === null) {
    // make a new head.
  }
}
append();

function prepend() {

}
prepend();



// TODO: implement reverse() as a method on the Linked List prototype; from your whiteboard exercise.

// TODO: in comments above or within each function, note the Big-O runtime.

// NOTE: implement findNthNode() as a method on the LL prototype.

// NOTE: implement findMiddleNode() as a method on the LL prototype.

/*
// ### GROUP CODE 2 ###
SLL.prototype.reverse = function() {
  let newSLL = new SLL();
  while (this.head) {
    newSLL.prepend(this.head.val);
    this.head = this.remove(this.head);
  }
  return newSLL;
};

SLL.prototype.remove = function(node) {
  node = node.next;
  return node;
};


// ### GROUP CODE ###
'use strict';

function reverse(sll) {
  let previous;
  //new sll

  check(sll.node);
  newSll;

  return newSll;

  function check(node) {
    if(!node) continue;
    if(!node.next)
      //append to new sll;
      remove(node);
      check(previous);
  } else {
    previous = node;
    check(node.next);
  }
}


// ### 1ST EXAMPLE ###
// [val, next]

// (HEAD)[val, next] The list is empty, so we just point the head at the new node

// (HEAD)[val, next] => [val, next] => [val, next] => [val, next] => [val, next]
// Prepend() adds a new node at the HEAD
// Append() adds a new node after last node


// ### CLARIFICATION ###

Assuming start to end would equal left to right, it would be the right, because appending is putting it at the end of the list.

// [val, next]   <= new Node()

// (HEAD)[val, next] The list is empty, so we just point the head at the new node

// (HEAD)[val, next] => [val, next] => [val, next] => [val, next] => [val, next]
// Prepend() adds a new node at the HEAD
Append() adds a new node after last node

[5:31]
A very basic implementation of a linked list will just have an `add()` method.

[5:33]
That's where the 'abstraction' can get confusing... the core functionality of a linked list which tracks *a* head of the list is about it. Then it's up to the node at that property to allow you access to further traverse the list.

[5:34]
It's up to your needs to define what further functionality you may need to interact with the data structure, such as `findMiddleNode()` or `reverse()`, etc.

// ### 2ND EXAMPLE ###
const Node = require('./list-node')

const SLL = module.exports = function() {
  this.head = null
}

SLL.prototype.prepend = function(value) {
  let node = new Node(value)
  if(!this.head) {
    this.head = node
    return this
  }

  node.next = this.head
  this.head = node
  return this
}

SLL.prototype.append = function(value) {
  let node = new Node(value)
  let lastNode = null

  if(!this.head) {
    this.head = node
    return this
  }

  _setLastNode(this.head)
  lastNode.next = node
  return this

  function _setLastNode(node) {
    if(!node) return
    lastNode = node
    _setLastNode(node.next)
  }
}
*/
