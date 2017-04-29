'use strict';

function reverse(list) {
  let currentNode = this.head.next;
  if(!lastNode) {
    let originalHead = this.head
  } else {
     currentNode.next = lastNode;
   };
  let lastNode = _findLastNode(list);
  if(lastNode.next === null) {
    lastNode.next = originalHead.next;
  }
  if(originalHead === lastNode){
    return list;
  };
  nodeFinder(list)
  reverse(list);
};

 let nodeFinder = function _findLastNode(list) {
   let returnedNode;
   let currentNode = this.head;
   if(currentNode.next === null) {
     returnedNode = currentNode;
     return;
   }
   let this.head = currentNode.next;
   nodeFinder(currentNode);
 };
