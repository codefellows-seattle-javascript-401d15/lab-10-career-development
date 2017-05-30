'use strict';

const SLL = require('../index.js');
const expect = require('chai').expect;

describe('index.js', function(){
  let sll;
  beforeEach(function(){
    sll = new SLL();
    sll.prepend(1);
    sll.prepend(2);
    sll.prepend(3);
  });
  afterEach(function(){
    sll = null;
  });

  describe('#SLL.prepend', function(){
    it('inserts the node before existing head node', function(done){
      sll.prepend(10);
      expect(sll.head.value).to.equal(10);
      done();
    });
  });

  describe('#SLL.append', function(){
    it('inserts node at end of SLL', function(done){
      sll.append(11);
      expect(sll.head.next.next.next.value).to.equal(11);
      done();
    });
  });

  describe('#SLL.removeNode', function(){
    it('removes the specified node', function(done){
      sll.removeNode(sll.head.next);
      expect(sll.head.value).to.equal(3);
      expect(sll.head.next.value).to.equal(1);
      done();
    });
  });

  describe('#SLL.reverse', function(){
    it('reverses the SLL', function(done){
      sll.reverse();
      expect(sll.head.value).to.equal(1);
      expect(sll.head.next.value).to.equal(2);
      expect(sll.head.next.next.value).to.equal(3);
      done();
    });
  });

});
