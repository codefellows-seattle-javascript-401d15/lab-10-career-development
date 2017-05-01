'use strict';

const Node = require('../model/list-node.js');
const SLL = require('../lib/sll.js');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

const original = new SLL();
original.head = new Node(1);
original.head.next = new Node(2);
original.head.next.next = new Node(3);
original.head.next.next.next = new Node(4);

describe('SLL module', function() {
  describe('#reverse', function() {
    it('should point head to last node in the original list', done => {
      let sll = new SLL();
      sll.head = new Node(1);
      sll.head.next = new Node(2);
      sll.head.next.next = new Node(3);
      sll.head.next.next.next = new Node(4);
      let test = sll.reverse(sll);
      expect(test.head.val).to.equal(original.head.next.next.next.val);
      done();
    });

    it('should point head\'s next pointer to 2nd to last node in original list', done => {
      let sll = new SLL();
      sll.head = new Node(1);
      sll.head.next = new Node(2);
      sll.head.next.next = new Node(3);
      sll.head.next.next.next = new Node(4);
      let test = sll.reverse(sll);
      expect(test.head.next.val).to.equal(original.head.next.next.val);
      done();
    });

    it('last node in the list\'s next should point to null', done => {
      let sll = new SLL();
      sll.head = new Node(1);
      sll.head.next = new Node(2);
      sll.head.next.next = new Node(3);
      sll.head.next.next.next = new Node(4);
      let test = sll.reverse(sll);
      expect(test.head.next.next.next.next).to.equal(null);
      done();
    });
  });

  describe('#remove', function() {
    it('should remove the second node from the list', done => {
      let sll = new SLL();
      sll.head = new Node(1);
      sll.head.next = new Node(2);
      sll.head.next.next = new Node(3);
      sll.head.next.next.next = new Node(4);
      let test = sll.remove(sll, 2);
      expect(test.head.next.val).to.not.equal(original.head.next.val);
      done();
    });

    it('should return an object', done => {
      let sll = new SLL();
      sll.head = new Node(1);
      sll.head.next = new Node(2);
      sll.head.next.next = new Node(3);
      sll.head.next.next.next = new Node(4);
      let test = sll.remove(sll, 2);
      expect(typeof test).to.equal(typeof original);
      done();
    });

    it('should still have last node point to null', done => {
      let sll = new SLL();
      sll.head = new Node(1);
      sll.head.next = new Node(2);
      sll.head.next.next = new Node(3);
      sll.head.next.next.next = new Node(4);
      let test = sll.remove(sll, 3);
      expect(test.head.next.next.next).to.equal(null);
      done();
    });
  });
});
