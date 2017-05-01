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


let sll = new SLL();

sll.append(1);
sll.append(2);
sll.append(3);
sll.append(4);
sll.append(5);

console.log(sll);

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

// sll.remove(3);
// console.log('removed 3', sll);
// sll.remove(2);
// console.log('removed 2 which was head', sll);


SLL.prototype.reverse = function(LinkedList){


};
