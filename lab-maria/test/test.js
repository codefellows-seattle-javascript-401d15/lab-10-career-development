'use strict';

const SLL = require('../sll');
const chai = require('chai');
const expect = chai.expect;

describe('node methods', function() {
  let sll = new SLL;
  it('should preprend a node to the beginning of list', done => {
    sll.prepend(2);
    sll.prepend(1);
    expect(sll.head.val).to.equal(1);
    expect(sll.head.next.val).to.equal(2);
    done();
  });
  it('should append a node to end of list', done => {
    sll.append(3);
    expect(sll.head.next.next.val).to.equal(3);
    expect(sll.head.next.next.next).to.equal(null);
    done();
  });
  it('should give me the length of the list (hopefully)', done => {
    expect(sll.getCountByRecursion()).to.equal(3);
    done();
  });
  it('should remove a node from the list', done => {
    let test = new SLL;
    test.append(1).append(3);
    expect(sll.remove(2)).to.deep.equal(test);
    done();
  });
  it('should reverse a motherfucking list', done => {
    let list = new SLL;
    list.append(1).append(2).append(3);
    let test = new SLL;
    test.append(3).append(2).append(1);
    list.reverse();
    expect(list).to.deep.equal(test);
    list.prepend(4);
    let anotherTest = new SLL;
    anotherTest.prepend(4).prepend(3).prepend(2).prepend(1);
    expect(list.reverse()).to.deep.equal(anotherTest);
    done();
  });
  it('should return the value of the node I want to find because apparently i want to do that', done => {
    let list = new SLL;
    list.append(1).append(2).append(3).append(4);
    let test = new SLL;
    test.append(5).append(9).append(2).append(6).append(2).append(4);
    expect(list.findNthNode(2)).to.equal(2);
    expect(test.findNthNode(4)).to.equal(6);
    done();
  });
  it('should return the value of the middle node', done => {
    let list = new SLL;
    list.append(1).append(2).append(3);
    let test = new SLL;
    test.append(1).append(2).append(3).append(4).append(5).append(6);
    let testArray = [3, 4];
    expect(list.findMiddleNode()).to.equal(2);
    expect(test.findMiddleNode()).to.deep.equal(testArray);
    done();
  });
});
