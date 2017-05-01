'use strict';

const expect = require('chai').expect;

const Node = require('../node.js');
const SLL = require('../sll.js');

let sll = new SLL();

describe('testing the single linked-list methods', function() {
  it('should instantiate a new linked list as an object', done => {
    // console.log('sll', sll);
    expect(sll).to.be.a('object');
    done();
  });
  
  it('should not be null', done => {
    expect(sll).to.exist;
    done();
  });
  
  it('should not be empty', done => {
    expect(sll).to.not.be.empty;
    done();
  });
  
  describe('testing the append method', function() {
    it('should not contain the value before appending', done => {
      expect(sll).to.not.have.valueOf(2);
      done();
    });
    
    it('should contain the appended value', done => {
      sll.append(2);
      expect(sll).to.have.valueOf(2);
      done();
    });
    
    it('should add a new node at the end of the linked list', done => {      
      expect(sll.head.next).to.equal.valueOf(2);
      done();
    });
    
    it('should add a third node to the linked list', done => {
      let sllAppend3 = sll.append(3);
      expect(sllAppend3).to.have.valueOf(3);
      done();
    });
    
    it('should add a third node at the end of the linked list', done => {
      let sllAppend3 = sll.append(3);
      expect(sllAppend3.head.next.next).to.equal.valueOf(3);
      done();
    });
  });
  
  describe('testing the prepend method', function() {
    it('should not include the value before prepending', done => {
      expect(sll).to.not.have.valueOf(4);
      done();
    });
    
    it('should add a value to the list', done => {
      let sllPrepend4 = sll.prepend(4);
      expect(sllPrepend4).to.have.valueOf(4);
      done();
    });
    
    it('should contain the value of 4 at the beginning of the linked list', done => {
      let sllPrepend4 = sll.prepend(4);
      expect(sllPrepend4.head).to.equal.valueOf(4);
      done();
    });
  });
  
  describe('testing the remove method', function() {
    let sllRemove = sll.append(3).append(6).append(1).append(9);
    
    it('should contain the value before the method was applied', done => {
      expect(sllRemove.head.next).to.equal.valueOf(6);
      done();
    });
    
    sllRemove.remove(6);
  
    it('should not contain the value after the method was applied', done => {
      expect(sllRemove).to.not.have.valueOf(6);
      done();
    });
    
    it('should contain the second value to remove', done => {
      expect(sllRemove.head.next.next.next).to.equal.valueOf(9);
      done();
    });
    
    sllRemove.remove(9);
    
    it('should be able to remove another value', done => {
      expect(sllRemove).to.not.have.valueOf(9);
      done();
    });
  });
  
  describe('testing the reverse method', function() {
    describe('checking starting order', function() {
      let sllReverse = sll.append(2).append(3).append(4);
      
      it('should append a value of 2', done => {
        expect(sllReverse.head).to.equal.valueOf(2);
        done();
      });
      
      it('should append a value of 3 next', done => {
        expect(sllReverse.head.next).to.equal.valueOf(3);
        done();
      });
      
      it('should append a value of 4 next', done => {
        expect(sllReverse.head.next.next).to.equal.valueOf(4);
        done();
      });
    });
    
    describe('checking the reversal', function() {
      let sllReverse = sll.append(2).append(3).append(4);
      sllReverse.reverse();

      it('should now begin with 4', done => {
        expect(sllReverse.head).to.equal.valueOf(4);
        done();
      });
      
      it('should have a value of 3 next', done => {
        expect(sllReverse.head.next).to.equal.valueOf(3);
        done();
      });
      
      it('should then have a value of 2', done => {
        expect(sllReverse.head.next.next).to.equal.valueOf(2);
        done();
      });
    });
  });
  
  describe.only('testing removal of a specific node', function() {
    let sllSpecificDelete = sll.append(3).append(6).append(1).append(9);
    
    it('should contain the value before the method was applied', done => {
      expect(sllSpecificDelete).to.have.valueOf(3);
      done();
    });
    
    sllSpecificDelete.removeSpecificNode(2);
    
    it('should not include the value after the method was applied', done => {
      expect(sllSpecificDelete).to.not.have.valueOf(3);
      done();
    });
    
    sllSpecificDelete.removeSpecificNode(3);
    
    it('should remove another node when called again', done => {
      expect(sllSpecificDelete).to.not.have.valueOf(2);
      done();
    });
  });
});