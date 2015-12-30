'use strict';

var test = require('tape');
var Set = require('es6-set');
var getDiff = require('./index');
var from = require('array-from');

test('diff()', function (t) {
  var a = new Set([1, 4]);
  var b = new Set([1, 2, 3]);
  var diff1 = toArrays(getDiff(a, b));
  t.deepEqual(diff1, {
    add: [2, 3],
    remove: [4],
    keep: [1]
  });
  var diff2 = toArrays(getDiff(b, a));
  t.deepEqual(diff2, {
    add: [4],
    remove: [2, 3],
    keep: [1]
  });

  t.end();
});

function toArrays (obj) {
  return {
    add: from(obj.add).sort(),
    remove: from(obj.remove).sort(),
    keep: from(obj.keep).sort()
  };
}
