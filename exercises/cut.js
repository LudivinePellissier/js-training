'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */


const cutFirst = (debut) => {
    return debut.substr(0,debut.length -2)
}

const cutLast = (debut) => {
    return debut.substr(2,debut.length -2)
}
 
const cutFirstLast = (debut) => {
    return debut.substr(2,debut.length -4)
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirst('abcdefg'), 'abcde')
assert.deepStrictEqual(cutLast('abcdefg'), 'cdefg')
assert.deepStrictEqual(cutFirstLast('abcdefg'), 'cde')
assert.deepStrictEqual(cutFirst('abcdefghijklmno'), 'abcdefghijklm')
assert.deepStrictEqual(cutLast('abcdefghijklmno'), 'cdefghijklmno')
assert.deepStrictEqual(cutFirstLast('abcdefghijklmno'), 'cdefghijklm')

// assert.fail('You must write your own tests')
// End of tests */
