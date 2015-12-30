'use strict';

var range = require('fill-range');
var Set = require('es6-set');
var diff = require('./index');

var set1 = new Set(range(1, 2000));
var set2 = new Set(range(1000, 3000));

console.time('benchmark');
for (var i = 0; i < 100; ++i) {
  diff(set1, set2);
}
console.timeEnd('benchmark');
