const expect = require('chai').expect;
const SLL = require('../lib/singly-linked-list.js');

let list = new SLL();

describe('linked list methods', function() {
  describe('prepend method', function() {
    let testPrepend = list.prepend(5);
    testPrepend.prepend(7);
    testPrepend.prepend(9);
    it('should return an object', done => {
      expect(testPrepend).to.be.an('object');
      done();
    });
    it('should have a value of 9 at the head, 7 at head.next, and 5 at head.next.next', done => {
      expect(testPrepend.head.val).to.equal(9);
      expect(testPrepend.head.next.val).to.equal(7);
      expect(testPrepend.head.next.next.val).to.equal(5);
      done();
    });
    it('should have a property called head', done => {
      expect(testPrepend).to.have.property('head');
      done();
    });
  });
  describe('append method', function() {
    let testAppend = list.append(5);
    testAppend.append(7);
    testAppend.append(9);
    it('should return an object', done => {
      expect(testAppend).to.be.an('object');
      done();
    });
    it('should have a value of 9 at the head, 7 at head.next, and 5 at head.next.next', done => {
      expect(testAppend.head.val).to.equal(9);
      expect(testAppend.head.next.val).to.equal(7);
      expect(testAppend.head.next.next.val).to.equal(5);
      done();
    });
    it('should have a property called head', done => {
      expect(testAppend).to.have.property('head');
      done();
    });
  });
  describe('reverse method', function() {
    let test = list.append(5);
    test.append(7);
    test.append(9);
    let testReverse = test.reverse();

    it('should return an object', done => {
      expect(testReverse).to.be.an('object');
      done();
    });
    it('should set the last node value to the head value', done => {
      expect(testReverse.head.val).to.equal(9);
      done();
    });
    it('should have a property called head', done => {
      expect(testReverse).to.have.property('head');
      done();
    });
  });
  // describe('remove method', function() {
  //   let test = list.append(5);
  //   test.append(7);
  //   test.append(9);
  //   let testRemove = test.remove();
  //
  //   it('should return an object', done => {
  //     expect(testRemove).to.be.an('object');
  //     done();
  //   });
  //   it('should not contain the value 9', done => {
  //     expect(testRemove).to.not.contain(9);
  //     done();
  //   });
  //   it('should have a property called head', done => {
  //     expect(testRemove).to.have.property('head');
  //     done();
  //   });
  // });
});
