'use strict';

const SLL = require('../lib/sll');
const expect = require('chai').expect;

//create a list (origList) and append values. Then test that origList is correct. Then test reverse method and compare that origList and new List are not equal to each other.
describe('test reverse method on single list link', function () {
  describe('#reverse', function () {
    it('should reverse a list', function () {
      let origList = new SLL();
      origList.append(1);
      origList.append(2);
      origList.append(3);
      origList.append(4);
      origList.reverse();
      expect(origList.head.val).to.equal(4);
      expect(origList.head.next.val).to.equal(3);
      expect(origList.head.next.next.val).to.equal(2);

    });
  });
});
