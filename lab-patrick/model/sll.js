'use strict';

const Node = require('./list-node');

const SLL = module.exports = function(){
  this.head = null;
};

SLL.prototype.append = function(value){
  let node =new Node(value);

  if(!this.head){
    this.head = node;
  }
  else{
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
};



// O(n)
SLL.prototype.remove = function(val){
  let current = this.head;
  if(current.val === val){
    this.head = current.next;
  }
  else {
    let last = current;
    while(current.next){
      if(current.val === val){
        last.next = current.next;
        return;
      }
      last = current;
      current = current.next;
    }
    if(current.val === val){
      last.next === null;
    }
  }
};

//O(n)
//Written with help from Glen
SLL.prototype.reverse = function(){
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

//Provided by Glen
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

let sll = new SLL();

sll.append(1);
sll.append(2);
sll.append(3);
sll.append(4);
sll.append(5);
sll.print();
sll.remove(4);

sll.reverse();
sll.print();
