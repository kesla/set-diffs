'use strict';

var range = require('fill-range');
var Set = require('es6-set');
var diff = require('./index');

var set1 = new Set(range(0, 1999));
var set2 = new Set(range(1000, 2999));
var set3 = new Set(range(2000, 3999));
var i;

console.time('no overlap');
for (i = 0; i < 100; ++i) {
  diff(set1, set3);
}
console.timeEnd('no overlap');

console.time('some overlap');
for (i = 0; i < 100; ++i) {
  diff(set1, set2);
}
console.timeEnd('some overlap');

console.time('all overlap');
for (i = 0; i < 100; ++i) {
  diff(set1, set1);
}
console.timeEnd('all overlap');
