'use strict';

const chai =require('chai')
const expect = chai.expect;

const LinkedList = require('../model/sll');

describe('SLL functionality', function(){
  describe('reverse method', function(){
    let sll = new LinkedList;
    sll.append(1);
    sll.append(2);
    sll.append(3);
    sll.append(4);
    sll.append(5);
    sll.reverse();
    sll.print();


    it('should change the last node to the head', done =>{
      expect(sll.head.val).to.equal(5);
      done();
    });
    it('should change the head.next the second to last node', done =>{
      expect(sll.head.next.val).to.equal(4);
      done();
    });
    it('should have a last node with val of 1', done =>{
      expect(sll.head.next.next.next.next.val).to.equal(1);
      done();
    });
  });
  describe('remove method', function(){
    let sll = new LinkedList;
    sll.append(1);
    sll.append(2);
    sll.append(3);
    sll.append(4);
    sll.append(5);
    sll.remove(2);
    sll.print();


    it('should not change head value', done =>{
      expect(sll.head.val).to.equal(1);
      done();
    });
    it('remove second node and move next node down', done =>{
      expect(sll.head.next.val).to.equal(3);
      done();
    });
    it('should have a 4th node to have next of null', done =>{
      expect(sll.head.next.next.next.next).to.equal(null);
      done();
    });
  });
});
