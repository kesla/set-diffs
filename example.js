'use strict';

var getDiff = require('./');

var a = new Set([1, 2, 3]);
var b = new Set([3, 4, 5]);
var diff = getDiff(a, b);

console.log('add', diff.add);
console.log('remove', diff.remove);
console.log('keep', diff.keep);
