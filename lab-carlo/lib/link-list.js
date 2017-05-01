'use strict';

function Node(data) {
  this.data = data;
  this.next = null;
}

function SingleLink() {
  this._length = 0;
  this.head = null;
}

SingleLink.prototype.add = function(value) {
  let node = new Node(value),
    currentNode = this.head;

  if(!currentNode) {
    this.head = node;
    this._length++;
    return node;
  }

  while(currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this._length++;
  return node;
};

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
