const assert = require('assert');
const validateEmail = require('../index');

assert.strictEqual(validateEmail('test@example.com'), true, 'Valid email should return true');
assert.strictEqual(validateEmail('invalid-email'), false, 'Invalid email should return false');

console.log('All tests passed!');