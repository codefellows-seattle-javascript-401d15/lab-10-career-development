'use strict';

const expect = require('chai').expect;

const Node = require('../node.js');
const SLL = require('../sll.js');

let sll = new SLL();

describe('testing the single linked-list methods', function() {
  it('should instantiate a new linked list as an object', done => {
    console.log('sll', sll);
    expect(sll).to.be.a('object');
    done();
  });
  
  describe('testing the append method', function() {
    it('should not contain the value before appending', done => {
      expect(sll).to.not.have.valueOf(2);
      done();
    });
    
    it('should add a new node at the end of the linked list', done => {
      sll.append(2);
      console.log('sll', sll);
      expect(sll).to.have.valueOf(2);
      done();
    });
    
    it('should add a third node at the end of the linked list', done => {
      let sll3 = sll.append(3);
      expect(sll).to.equal(sll3);
      done();
    });
  });
  
  describe('testing the prepend method', function() {});
  
  describe('testing the reverse method', function() {});
  
});