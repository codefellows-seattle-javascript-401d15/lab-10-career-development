'use strict';

// Data value can be anything: array, object.
module.exports = function(value) {
  this.val = value;
  this.next = null;
};
