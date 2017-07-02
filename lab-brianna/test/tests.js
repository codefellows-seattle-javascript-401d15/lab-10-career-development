'use strict';

const SLL = require('../lib/sll');
const expect = require('chai').expect;

//create a list (sll) and append values. Then test that origList is correct. Then test reverse method and compare that origList and new List are not equal to each other.
describe('test reverse method on single list link', function () {
  describe('#reverse', function () {
    it('should reverse a list', done => {
      let sll = new SLL();
      sll.append(1);
      sll.append(2);
      sll.append(3);
      sll.append(4);
      sll.reverse();
      expect(sll.head.val).to.equal(4);
      expect(sll.head.next.val).to.equal(3);
      expect(sll.head.next.next.val).to.equal(2);
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
});
