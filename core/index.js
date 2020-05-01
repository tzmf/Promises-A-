"use strict"

/**
 * Promises/A+ Implement
 * @tutorial https://promisesaplus.com/
 *
 * @param {function} executor
 */

function Promise(executor) {
  if (typeof executor !== "function") throw new Error("")

  try {
    executor(Promise.resolve, Promise.reject)
  } catch (e) {
    Promise.reject(e)
  }
}

Promise.resolve = function (resolver) {}

Promise.reject = function (reason) {}

Promise.all = function (promises) {}

Promise.race = function (promises) {}

function createThen(callback) {}

function createCatch(callback) {}

function getDefaulInstance() {
  const promise = Object.create(Promise.prototype)
}

/**
 * get Promise Instance Descriptor
 */

function getInstanceDescriptores() {
  const defaultDescriptor = {
    configurable: true,
    enumerable: true,
  }

  return {
    _resolved_: {
      ...defaultDescriptor,

      get() {},

      set() {},
    },

    _status_: {
      ...defaultDescriptor,

      set() {},

      set() {},
    },
  }
}
