# set-diffs 

Get diff (added, removed, changed, unchanged) from two Sets

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install set-diffs --save
```

## Usage

```js
'use strict';

var getDiff = require("set-diffs");

var a = new Set([1, 2, 3]);
var b = new Set([3, 4, 5]);
var diff = getDiff(a, b);

console.log('add', diff.add);
console.log('remove', diff.remove);
console.log('keep', diff.keep);

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [array-from](https://github.com/studio-b12/array-from): A ponyfill for the ES 2015 (ES6) `Array.from()`.

## Dev Dependencies

- [es6-set](https://github.com/medikoo/es6-set): ECMAScript6 Set polyfill
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
