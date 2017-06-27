'use strict';

const expect = require('chai').expect
const SLL = require('../model/sll')

let newSLL = new SLL()
newSLL.append(1)
newSLL.append(2)
newSLL.append(3)
newSLL.append(4)
newSLL.append(5)

describe('SLL methods', function(){

  describe('SLL.prepend', () => {
    it('should show the head originally being 1', done => {
      let prependSLL = newSLL
      expect(prependSLL.head.val).to.equal(1)
      done()
    })
    it('should verify a new head of 0', done => {
      let prependSLL = newSLL
      prependSLL.prepend(0)
      expect(prependSLL.head.val).to.equal(0)
      done()
    })
  })

  describe('SLL.append', () => {
    let appendSLL = newSLL

    it('should show a final node of 5 being the last', done => {
      let finalNode = appendSLL.findTail()
      expect(finalNode.val).to.equal(5)
      done()
    })
    it('should return a new value of 6 being the unofficial tail', done => {
      appendSLL.append(6)
      let newFinalNode = appendSLL.findTail()
      expect(newFinalNode.val).to.equal(6)
      done()
    })
  })

  describe('SLL.reverse', () => {
    let testReverseSLL = newSLL
    it('should return the base case: head === 0, finalNode === 5', done => {
      let newerFinalNode = testReverseSLL.findTail()
      expect(testReverseSLL.head.val).to.equal(0)
      expect(newerFinalNode.val).to.equal(6)
      done()
    })
    it('should now return: head === 5, newFinalNode === 0', done => {
      let reversedSLL = testReverseSLL.reverse()
      let newestFinalNode = reversedSLL.findTail()
      expect(reversedSLL.head.val).to.equal(6)
      expect(newestFinalNode.val).to.equal(0)
      done()
    })
  })

  describe('SLL.remove', () => {
    let removeSLL = newSLL
    it('should remove a value, and reassign the head', done => {
      removeSLL.remove(6)
      expect(removeSLL.head.val).to.equal(5)
      done()
    })
    it('should remove a value, and reassign head.next', done => {
      removeSLL.remove(4)
      expect(removeSLL.head.next.val).to.equal(3)
      done()
    })
  })

})
