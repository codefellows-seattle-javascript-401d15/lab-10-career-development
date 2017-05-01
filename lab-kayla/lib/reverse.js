'use strict';

module.exports = function(value) {
  this.val = value;
  this.next = null;
};
//I am refactoring this

// function reverse(value) {
//   let currentNode = this.head.next;
//   if(!lastNode) {
//     let originalHead = this.head;
//   } else {
//     currentNode.next = lastNode;
//   }
//   let lastNode = nodeFinder(value);
//   if(lastNode.next === null) {
//     lastNode.next = originalHead.next;
//   }
//   if(originalHead === lastNode){
//     return value;
//   }
//
//   let nodeFinder = function() {
//     let returnedNode;
//     let currentNode = this.head;
//     if(currentNode.next === null) {
//       returnedNode = currentNode;
//       return;
//     }
//     this.head = currentNode.next;
//     nodeFinder(currentNode);
//   };
//
//   nodeFinder(value);
//   reverse(value);
// }
