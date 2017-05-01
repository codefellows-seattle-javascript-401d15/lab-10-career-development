'use strict';
const SLL = require('../sll');
const list = require('../list-node')
const expect = require('chai').expect;

let llOne = new SLL();
llOne.append(5);
llOne.append(10);
llOne.append(15);
llOne.append(20);
llOne.print();

let llTwo = new SLL();
llTwo.append(20);
llTwo.append(15);
llTwo.append(10);
llTwo.append(5);
llTwo.print();

let llThree = new SLL();
llThree.append(10);
llThree.append(15);
llThree.append(20);
llThree.print();

let llOneTest = llOne.reverse();
let llTwoTest = llTwo.print();
// llOne.remove(5);
// let llOneRemoved = llOne.remove(5);
// console.log('removed ', llOneRemoved);
console.log(llOneTest);
console.log(llTwoTest);


describe('Testing SLL methods', function() {
  describe('reverse functionality', function() {
  it('Should reverse the values of the list when reversed', done => {
    expect(llOneTest).to.equal(llTwoTest);
    done();
  });
  it('Should have the head value equal the tail value once it is reversed.', done => {
    expect(llOne.head.val).to.equal(llTwo.head.val);
    done();
  });
  it('Should have the same second node values', done => {
    expect(llOne.head.next.val).to.equal(llTwo.head.next.val);
    done();
  });
});
  describe('remove functionality', function() {
    describe('it should remove a value when the funtion is called', done => {
      let llOne = new SLL();
      llOne.append(5);
      llOne.append(10);
      llOne.append(15);
      llOne.append(20);
      llOne.print();
      llOne.remove(5);
      console.log('oneVAL ', llOne.head.val);
      console.log('twoVAL ',llThree.head.val);
      expect(llOne.head.val).to.equal(llThree.head.val);
      done();
    });
  });
});
