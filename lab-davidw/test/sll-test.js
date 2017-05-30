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
      it('should not contain a value before prepending', done => {
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
        expect(sll.head.next).to.be.an('object')
        .that.has.property('val')
        .that.equals(2);
        done();
      });
    });

    describe('#reverse method', function() {
      let revSll = new SLL().append(1);
      revSll.append(2);
      revSll.append(3);

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

      it('should make new order become 3, 2, 1', function() {
        revSll.reverse();
        it('should now have an order of 3, 2, 1', done => {
          expect(revSll.head.next.next).to.be.an('object')
          .that.has.property('next')
          .that.equals(null);

          expect(revSll.head).to.be.an('object')
          .that.has.property('val')
          .that.equals(3);

          expect(revSll.head.next).to.be.an('object')
          .that.has.property('val')
          .that.equals(2);

          expect(revSll.head.next.next).to.be.an('object')
          .that.has.property('val')
          .that.equals(1);
          done();
        });
      });
      describe('#remove  method', function() {
        it('should start with values 1 and 2', done => {
          let remSll = new SLL();
          remSll.append(1);
          remSll.append(2);
          expect(remSll.head).to.be.an('object')
          .that.has.property('val')
          .that.equals(1);
          done();
        });
        it('should have only a value of 2 after removing 1', done => {
          let remSll = new SLL();
          remSll.append(1);
          remSll.append(2);
          remSll.remove(1);
          expect(remSll.head).to.be.an('object')
          .that.has.property('val')
          .that.equals(2);
          done();
        });
        it('should have only a value of head and next = null after removing 1 and 2', done => {
          let remSll = new SLL();
          remSll.append(1);
          remSll.append(2);
          remSll.remove(1);
          remSll.remove(2);
          expect(remSll).to.be.an('object')
          .that.has.property('head')
          .that.equals(null);
          done();
        });
      });
    });
  });
});
