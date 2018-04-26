//'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :


let i = 0
let result = 0

const multiply = (nb1, nb2) => {
  if (i === nb2 || nb1 === 0 || nb2 === 0) {
    //console.log(result)
    return result
  }

  result = result + nb1
  //console.log('r', result)
  i = i + 1
  // const res = multiply(nb1, nb2)
  return multiply(nb1, nb2)

  // return res
}

// console.log("c le premier passage de i =" , i)
// console.log("premier de result",result)
//const res = multiply(10, 1)
//console.log('result:', res)
//console.log("2eme i :", i)
//console.log("second result",result)

//console.log('console log de multiply au second tour',multiply(10,5))









//* Begin of tests
// const assert = require('assert')

// assert.strictEqual(typeof multiply, 'function')
// assert.strictEqual(multiply.length, 2)
// assert.strictEqual(multiply.toString().includes('Math.imul'), false)
// assert.strictEqual(multiply.toString().includes('while'), false)
// assert.strictEqual(multiply.toString().includes('for'), false)
// assert.strictEqual(multiply.toString().includes('*'), false)
// assert.strictEqual(multiply.toString().includes('/'), false)
// assert.strictEqual(multiply(34, 78), 2652)
// assert.strictEqual(multiply(123, 0), 0)
// assert.strictEqual(multiply(0, -230), 0)
// assert.strictEqual(multiply(0, 0), 0)
// assert.strictEqual(multiply(123, -22), -2706)
// assert.strictEqual(multiply(-22, 123), -2706)
// assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */