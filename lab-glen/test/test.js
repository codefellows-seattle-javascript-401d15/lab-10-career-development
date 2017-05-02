

const expect = require('chai').expect;

const LinkedList = require('../lib/sll.js');

describe('Linked List Class', function () {

  it('Should have head and tail properties and be an Object', function () {
    let test = new LinkedList();
    expect(test).to.have.property('head');
    expect(test).to.have.property('tail');
    expect(test.head).to.equal(null);
    expect(test).to.be.instanceOf(Object);
  });
});

describe('Linked List Function Test', function() {

  describe('#REMOVE function test', function() {

    it('should remove an element from the middle of the list', function () {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.print();
      list.remove(2);
      list.print();
      expect(list.head.val).to.equal(1);
      expect(list.tail.val).to.equal(3);
      expect(list.head.next.val).to.equal(3);
      expect(list.listLength).to.equal(2);
    });

    it('should remove the head from the list', function () {
      let list = new LinkedList();
      list.append(5);
      list.append(10);
      list.append(15);
      list.print();
      list.remove(5);
      list.print();
      expect(list.head.val).to.equal(10);
      expect(list.head.next.val).to.equal(15);
      expect(list.head.next.next).to.equal(null);
      expect(list.listLength).to.equal(2);
    });

    it('should remove the tail from the list', function () {
      let list = new LinkedList();
      list.append(5);
      list.append(10);
      list.append(15);
      list.print();
      list.remove(15);
      list.print();
      expect(list.head.val).to.equal(5);
      expect(list.head.next.val).to.equal(10);
      expect(list.head.next.next).to.equal(null);
      expect(list.listLength).to.equal(2);
    });
  });

  describe('#REVERSE function test', function() {

    it('should reverse a list', function () {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.print();
      list.reverse();
      list.print();
      expect(list.head.val).to.equal(3);
      expect(list.head.next.val).to.equal(2);
      expect(list.head.next.next.val).to.equal(1);
    });
    it('should reverse a list again with more numbers this time', function () {
      let list = new LinkedList();
      list.append(9);
      list.append(8);
      list.append(7);
      list.append(6);
      list.append(5);
      list.append(4);
      list.append(3);
      list.append(2);
      list.append(1);
      list.print();
      list.reverse();
      list.print();
      expect(list.head.val).to.equal(1);
      expect(list.head.next.val).to.equal(2);
      expect(list.head.next.next.val).to.equal(3);
      expect(list.head.next.next.next.val).to.equal(4);
      expect(list.head.next.next.next.next.val).to.equal(5);
      expect(list.head.next.next.next.next.next.val).to.equal(6);
      expect(list.head.next.next.next.next.next.next.val).to.equal(7);
      expect(list.head.next.next.next.next.next.next.next.val).to.equal(8);
      expect(list.head.next.next.next.next.next.next.next.next.val).to.equal(9);
    });
  });

  describe('#findNthNode function test', function() {

    it('should find an element at a given position', function () {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      let found = list.findNthNode(0);
      expect(found.val).to.equal(1);
      expect(found.next.val).to.equal(2);
    });
  });

  describe('#findMiddleNode function test', function() {

    it('should find the middle element of the list', function () {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      list.append(5);
      list.print();
      let half = list.findMiddleNode();
      list.print();
      expect(half.val).to.equal(3);
      expect(half.next.val).to.equal(4);
    });
  });
});
