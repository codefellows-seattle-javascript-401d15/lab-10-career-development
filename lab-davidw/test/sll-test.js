'use strict';

const expect = require('chai').expect;
const SLL = require('../sll');


describe('#SLL method tests', function() {
  describe('linked list creation', function() {
    let sll = new SLL();
    it('should create a new linked list object', done => {
      expect(sll).to.be.an('object')
      .that.has.property('head')
      .that.equals(null);
      done();
    });

    describe('#append method', function() {
      it('should not contain the value before appending', done => {
        expect(sll).to.have.property('head')
        .that.equals(null);
        done();
      });

      it('should add a new node at the end of the list', done => {
        sll.append(2);
        expect(sll.head).to.be.an('object')
        .that.has.property('val')
        .that.equals(2);
        done();
      });

      it('should add another node', done => {
        sll.append(3);
        expect(sll.head.next).to.be.an('object')
        .that.has.property('val')
        .that.equals(3);
        done();
      });
    });

    describe('#prepend method', function() {
      let sll = new SLL();
      it('should not contain the value before prepending', done => {
        expect(sll).to.have.property('head')
        .that.equals(null);
        done();
      });

      it('should add a new node to the beginning of the list', done => {
        sll.prepend(2);
        expect(sll.head).to.be.an('object')
        .that.has.property('val')
        .that.equals(2);
        done();
      });

      it('should add another node', done => {
        sll.prepend(2);
        console.log('remind me sll', sll);
        expect(sll.head.next).to.be.an('object')
        .that.has.property('val')
        .that.equals(2);
        done();
      });
    });

    describe('#reverse method', function() {
      let revSll = { head: { val: 1, next: { val: 2, next: { val: 3, next: null   } } } };

      it('should start with an order of 1, 2, 3', done => {
        expect(revSll.head.next.next).to.be.an('object')
        .that.has.property('next')
        .that.equals(null);

        expect(revSll.head.next.next).to.be.an('object')
        .that.has.property('val')
        .that.equals(3);

        expect(revSll.head.next).to.be.an('object')
        .that.has.property('val')
        .that.equals(2);

        expect(revSll.head).to.be.an('object')
        .that.has.property('val')
        .that.equals(1);
        done();
      });

      it('should move val: 3 left one position.  new order is 1, 3, 2', function() {
        console.log('TEST THIS');
      });

      it('should move val: 3 left one more position.  new order is 3, 1, 2', function() {
        console.log('TEST THIS');
      });

      it('should move val: 2 left one position.  new order is 3, 2, 1', function() {
        console.log('TEST THIS done when it passes');
      });
    });
  });
});
