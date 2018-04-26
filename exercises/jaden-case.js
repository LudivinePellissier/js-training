'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const test = "How are you ?"

const jadenCase = (string) => {
    const words = string.split(" ")
    
    const finalWords = words.map(word => {
        const firstLetter = word.substr(0,1).toUpperCase()
        const othersLetters = word.substr(1, word.length -1).toLowerCase()
        const finalWord = firstLetter + othersLetters
        
        return finalWord
    })

    return finalWords.join(" ")
}


//console.log(jadenCase(test))

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.deepStrictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.deepStrictEqual(jadenCase('Bla bla bla'), 'Bla Bla Bla')
assert.deepStrictEqual(jadenCase('WILD code sChooL'), 'Wild Code School')

// End of tests *