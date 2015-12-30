'use strict';

var Set = require('es6-set');

module.exports = function (a, b) {
  var keep = new Set();
  var remove = new Set();
  var add = new Set();

  a.forEach(function (value) {
    if (b.has(value)) {
      keep.add(value);
    } else {
      remove.add(value);
    }
  });

  b.forEach(function (value) {
    if (!keep.has(value)) {
      add.add(value);
    }
  });

  return {
    keep: keep,
    remove: remove,
    add: add
  };
};
