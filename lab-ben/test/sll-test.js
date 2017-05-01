'use strict';

let expect = require('chai').expect;
let SLL = require('../lib/sll.js');

describe('SLL', function() {
  describe('#remove', function() {
    it('should remove the last node if passed in', () => {
      let sll = new SLL;
      sll.prepend(57);
      sll.append(78);
      sll.append(4);
      sll.head.next.next = sll.remove(sll.head.next.next);
      expect(sll.head.next.next).to.not.exist;
    });
    it('keep any nodes after the removed one', () => {
      let sll = new SLL;
      sll.prepend(57);
      sll.append(78);
      sll.append(4);
      // console.log(sll);
      sll.head.next = sll.remove(sll.head.next);
      console.log(sll);
      expect(sll.head.next).to.exist;
    });
    it('should also work on the head', () => {
      let sll = new SLL;
      sll.prepend(57);
      sll.append(78);
      sll.append(4);
      sll.head = sll.remove(sll.head);
      expect(sll.head.next).to.exist;
    });
  });

  describe('#reverse', function() {
    
  });
});
