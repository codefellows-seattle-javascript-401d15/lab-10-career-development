'use strict';

const Node = module.exports = function(val) {
  this.val = val;
  this.next = null;
};

const SingleLink = module.exports = function() {
  this._length = 0;
  this.head = null;
};
//O(n)
SingleLink.prototype.append = function(value) {
  let node = new Node(value),
    currentNode = this.head;

  if(!currentNode) {
    this.head = node;
    return node;
  }

  while(currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this._length++;
  return node;
};
//O(n)
SingleLink.prototype.nodeSearchAt = function(position) {
  let currentNode = this.head,
    length = this._length,
    count = 1,
    message = {failure: 'Fail: that node does not exist'};

  if(length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  while(count< position) {
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
};
//O(n)
SingleLink.prototype.delete = function(position) {
  let currentNode = this.head,
    length = this._length,
    count = 0,
    message = {failure: 'Fail: that node does not exist'},
    nodeBeforeDelete = null,
    nodeToDelete = null,
    nodeDeleted = null;

  if(position < 0 || position > length) {
    throw new Error(message.failure);
  }

  if(position == 1){
    this.head = currentNode.next;
    nodeDeleted = currentNode;
    currentNode = null;
    this._length--;

    return nodeDeleted;
  }

  while(count < position) {
    nodeBeforeDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }

  nodeBeforeDelete.next = nodeToDelete.next;
  nodeDeleted = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return nodeDeleted;
};
//O(n)
SingleLink.prototype.reverse = function() {
  let current = this.head;
  let previousNode = null;
  let next;

  while(current) {
    next = current.next;
    current.next = previousNode;
    previousNode = current;
    current = next;
  }
  this.head = previousNode;
};

SingleLink.prototype.print = function () {
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
  return output;
};

let newList = new SingleLink();
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.reverse();
newList.print();
console.log(newList);
