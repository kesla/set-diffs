'use strict';

var arrayFrom = require('array-from');
var Set = require('es6-set');

module.exports = function (a, b) {
  var keep = new Set(
    arrayFrom(a).filter(function (x) { return b.has(x); })
  );
  var remove = new Set(
    arrayFrom(a).filter(function (x) { return !keep.has(x); })
  );
  var add = new Set(
    arrayFrom(b).filter(function (x) { return !keep.has(x); })
  );
  return {
    keep: keep,
    remove: remove,
    add: add
  };
};
