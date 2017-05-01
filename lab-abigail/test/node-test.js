'use strict';

const list = require('../lib/linked-list');
const chai = require('chai');
const expect = chai.expect;

describe('Node Tests' , function() {

  describe('Reverse Prototype', function() {

    SLL.reverse();

    it('should', function(done) {
      expect(SLL).to.be.deep.equal(4,3,2,1);
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


  describe('Remove Prototype', function() {
    SLL.remove();
    
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
