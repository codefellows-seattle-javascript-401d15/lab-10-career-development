'use strict';

const expect = require('chai').expect;
const LinkList = require('../lib/link-list');


describe('SingleLink List Methods', function() {

  let list = new LinkList;
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.print();
  list.reverse();
  list.print();
  console.log(list);

  describe('#REVERSE method', function() {

    it('should have a head value of 4', done => {
      expect(list.head.val).to.equal(4);
      done();
    });

    it('should not have a head with value of 1', done => {
      expect(list.head.val).to.not.equal(1);
      done();
    });
    it('should have the next node equal 3', done => {
      expect(list.head.next.val).to.equal(3);
      done();
    });
  });

  describe('#DELETE method', function() {
    let testList = new LinkList;
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.append(4);
    testList.print();
    testList.delete(2);
    testList.print();
    it('should still have a head value of 4', done => {
      expect(list.head.val).to.equal(4);
      done();
    });
    it('should have a head.next of 3', done => {
      expect(list.head.next.val).to.equal(3);
      done();
    });
    it('should not have a head.next of 2', done => {
      expect(list.head.next.val).to.not.equal(2);
      done();
    });
  });
});
