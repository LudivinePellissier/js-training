'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 */
// const test = "blablablabla"

const capitalize = (string) => {
    const firstLetter = string.substr(0,1).toUpperCase()
    const othersLetters = string.substr(1,string.length -1).toLowerCase()
    const finalWord = firstLetter + othersLetters
    return finalWord
}

// console.log(capitalize(test))

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
