'use strict'

const Node = require('./node.js')

const SLL = module.exports = function() {
  this.head = null
}

// O(1) - always starts at the head to prepend.
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

// O(n)
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

// O(n)
SLL.prototype.findTail = function(){
  let current = this.head
  let tail

  while(current.next !== null){
    current = current.next
    if(current.next === null) tail = new Node(current.val)
  }

  return tail
}

// O(n)
SLL.prototype.remove = function(value){
  let current = this.head

  if(this.head.val === value) this.head = this.head.next

  if(current.next.val !== value) current = current.next
  if(current.next.val === value) current.next = current.next.next

  return
}

// O(n)
SLL.prototype.reverse = function(){
  let current = this.head
  let previous = null
  let next

  while(current){
    next = current.next
    current.next = previous
    previous = current
    current = next
  }
  this.head = previous
  return this
}
