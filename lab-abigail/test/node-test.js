'use strict';

const ll = require('../lib/linked-list');
const Node = require('../lib/list-node');
const chai = require('chai');
const expect = chai.expect;

describe('Node Tests' , function() {

  describe('Reverse Prototype', function() {

    let list = new Node();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.print();
    list.reverse();
    list.print();

    it('should', function(done) {
      expect(list.head).to.be.equal(1);
      done();
    });
    it('should', function(done) {
      expect(list).to.be.an('object');
      done();
    });
    it('should', function(done) {
      expect(SLL).to.exist;
      done();
    });
  });


  describe('Remove Prototype', function() {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.print();
    list.remove(3);
    list.print();

    it('should', function(done) {
      expect(SLL).to.deep.equal(1,2,4);
      done();
    });
    it('should', function(done) {
      expect(SLL).to.be.an('object');
      done();
    });
    it('should', function(done) {
      expect(SLL).to.exist;
      done();
    });
  });
});
