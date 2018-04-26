'use strict'

/*
 * Create a constant variables named `escapeStr` that contains specials
 * characters: /\`"'
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :

const escapeStr = `Je "teste" une phrase \`longue avec plein de 'caractères' bizarres pour dire que pour écrire / à l'envers il faut écrire le caractère deux \\ fois.`

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof escapeStr, 'string')
assert.strictEqual(escapeStr.includes("'"), true)
assert.strictEqual(escapeStr.includes('"'), true)
assert.strictEqual(escapeStr.includes('`'), true)
assert.strictEqual(escapeStr.includes('/'), true)
assert.strictEqual(escapeStr.includes('\\'), true)
// End of tests */
