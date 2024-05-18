import assert from 'node:assert';

import {
  validateConfidence,
  validateAccuracy,
  validateApproximateSize,
  validateFilePath,
} from './validation';

// Tests for validateAccuracy
assert.strictEqual(validateAccuracy(0.5), true);
assert.strictEqual(validateAccuracy(0.01), true);
assert.strictEqual(validateAccuracy(1.0), true);
assert.strictEqual(validateAccuracy(0), false);
assert.strictEqual(validateAccuracy(1.1), false);
assert.strictEqual(validateAccuracy('0.5'), true);
assert.strictEqual(validateAccuracy('abc'), false);

// Tests for validateApproximateSize
assert.strictEqual(validateApproximateSize(10), true);
assert.strictEqual(validateApproximateSize(1), true);
assert.strictEqual(validateApproximateSize(0), false);
assert.strictEqual(validateApproximateSize(-5), false);
assert.strictEqual(validateApproximateSize('10'), true);
assert.strictEqual(validateApproximateSize('abc'), false);

// Tests for validateConfidence
assert.strictEqual(validateConfidence(0.5), true);
assert.strictEqual(validateConfidence(0.01), true);
assert.strictEqual(validateConfidence(1.0), true);
assert.strictEqual(validateConfidence(0), false);
assert.strictEqual(validateConfidence(1.1), false);
assert.strictEqual(validateConfidence('0.5'), true);
assert.strictEqual(validateConfidence('abc'), false);

// Tests for validateFilePath
assert.strictEqual(validateFilePath('/path/to/file.txt'), true);
assert.strictEqual(validateFilePath('relative/path.json'), true);
assert.strictEqual(validateFilePath(''), false);
assert.strictEqual(validateFilePath(5), false); 

console.log('All validation tests passed!');
