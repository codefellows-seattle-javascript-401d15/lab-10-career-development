'use strict';

// Source of this code: https://www.youtube.com/watch?v=9YddVVsdG5A&list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ&index=8

function LinkedList() {
  let length = 0;
  // Head points to first node.
  let head = null;

  let Node = function(element) {
    this.element = element; // Is info or data.
    // Last node points to null, no next node.
    this.next = null; // Link. Next is null to start.
  };

  // Size is the number of nodes.
  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  // Add/pass in element to linked list.
  this.add = function(element) {
    // Create new node with that element.
    let node = new Node(element);
    // No nodes in the linked list yet.
    if (head === null) {
      head = node;
    // More than one element in the list.
    } else {
      // Start at the head node, then go through each item in the list.
      let currentNode = head;

      // While there is a next node, hop from node to node.
      while(currentNode.next) {
        // At end of the list when no more currentNode.next.
        currentNode = currentNode.next;
      }

      // Add the element to the end of the list. Once last node, set link to be new node we added instead of null.
      currentNode.next = node;
    }
    // Increment the length.
    length++;
  };

  // Search list, find and remove node containing that element.
  this.remove = function(element) {
    // Start at head.
    let currentNode = head;
    let previousNode;
    // Head node is the element we're trying to remove.
    if(currentNode.element === element) {
      // Head pointer will be pointing to the next node.
      head = currentNode.next;
    // If head node is not the node we're looking for.
    } else {
      // While the node we're on does not equal the node we're searching for, keep going through until we find the node we're looking for.
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // If removing 2nd node, set previous node/link (1st). Won't point to current node (2nd), link points to currentNode.next (3rd).
      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = function() {
    // If length is 0, return true. If not 0, return false.
    return length === 0;
  };

  // Hop from node to node until we find that element, then return that index.
  this.indexOf = function(element) {
    // Start at the beginning.
    let currentNode = head;
    let index = -1;

    // While there is a current node, node not null, increment the index.
    while(currentNode) {
      index++;
      // If first element (info) equals what we passed in, return index.
      if (currentNode.element === element) {
        return index;
      }
      // Hop from node to node, keep adding 1 to the index.
      currentNode = currentNode.next;
    }
    // Element isn't in the linked list.
    return -1;
  };

  // Passing in index and return element.
  this.elementAt = function(index) {
    let currentNode = head;
    let count = 0;
    // While we haven't got to the index we're searching for.
    while (count < index) {
      // Increment count.
      count++;
      // Hop to the next node.
      currentNode = currentNode.next;
    }
    // When count equals index we've reached the right index.
    return currentNode.element;
  };

  // Can add at middle of list.
  this.addAt = function(index, element) {
    // Node is a node we just passed in.
    let node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    // If we pass in an index that's bigger than the length of the linked list.
    if(index > length) {
      return false;
    }

    // Trying to add the element to the head node.
    if(index === 0) {
      // Next element will be the current node. Current head node.
      node.next = currentNode;
      // Set head to equal the node we passed in.
      head = node;
    // We don't want the index to be the head node.
    } else {
      // Go through each index until we find the correct node.
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // Once we get to that index (e.g. index 1, 2nd node), node we passed in set to current node (2nd node).
      node.next = currentNode;
      // Set to the node we're passing in.
      previousNode.next = node;
    }
    length++;
  };

  // Similar to add, but not creating new node.
  this.removeAt = function(index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    // We can't remove a negative index or greater than list.
    if (index < 0 || index >= length) {
      return null;
    }

    // Tring to remove head node.
    if(index === 0) {
      // Set head node to equal next node (2nd element/node).
      head = currentNode.next;
    // Find element we want to remove (2nd element/node).
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // Set previous link (1st) to (3rd element/node).
      previousNode.next = currentNode.next;
    }
    // Remove 2nd element/node.
    length--;
    // Return the node that we're removing.
    return currentNode.element;
  };

}

let example = new LinkedList();
example.add('Kitten');
example.add('Puppy');
example.add('Dog');
example.add('Cat');
example.add('Fish');
console.log(example.size());
console.log(example.removeAt(3));
console.log(example.elementAt(3));
console.log(example.indexOf('Puppy'));
console.log(example.size());

// OUTPUT...

// 5
// Cat
// Fish
// 1
// 4
