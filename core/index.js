"use strict"

/**
 * Promises/A+ Implement
 * @tutorial https://promisesaplus.com/
 *
 * @param {function} fn
 */

function Promise(fn) {

  this.then = function () {}
  this.catch = function () {}

  fn(Promise.resolve, Promise.reject)
}

Promise.resolve = function (resolver) {}

Promise.reject = function (reason) {}

Promise.all = function (promises) {}

Promise.race = function (promises) {}

creactThen() {}

creactCatch() {}