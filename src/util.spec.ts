import assert from 'node:assert';

import { stripWordPunctuation } from './util';

assert.strictEqual(stripWordPunctuation('"Hello'), 'Hello');
assert.strictEqual(stripWordPunctuation('(world)'), 'world');
assert.strictEqual(stripWordPunctuation('-This'), 'This');
assert.strictEqual(stripWordPunctuation('hello!'), 'hello');
assert.strictEqual(stripWordPunctuation('there.'), 'there');
assert.strictEqual(stripWordPunctuation('is;'), 'is');
assert.strictEqual(stripWordPunctuation('can\'t'), 'cant');
assert.strictEqual(stripWordPunctuation('won’t'), 'wont');
assert.strictEqual(stripWordPunctuation('it’s'), 'its');
assert.strictEqual(stripWordPunctuation('ma-ma'), 'mama');
assert.strictEqual(stripWordPunctuation('!@#$%^&*()_+-=[]{};:\'",./<>?'), '');
assert.strictEqual(stripWordPunctuation('«»¿¡'), '');
assert.strictEqual(stripWordPunctuation('Hello world'), 'Hello world');
assert.strictEqual(stripWordPunctuation('123 456'), '123 456');
assert.strictEqual(stripWordPunctuation(''), '');

console.log('All util tests Passed!')