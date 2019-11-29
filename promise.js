/**
 * Promises/A+ Implement
 *
 * @export
 * @class MyPromise
 */

export default class MyPromise {
  constructor(fn) {
		if (typeof fn !== 'function') {
			const type = typeof fn
			throw new Error(`Uncaught TypeError: Promise resolver ${type} is not a function`)
		}

		this.state = 'pending'
		this.resolvedCallbacks = []
		this.rejectedCallbacks = []
		try {
			fn.call(undefined, this._onFulfilled, this._onRejected)
		} catch(e) {
			// todo
		}
	}

  /**
   * Register Callback function
   * return a MyPromise
   *
   * @param {function} onFulfilled
   * @param {function} onRejected
   *
   * @memberof MyPromise
   */

  then(onFulfilled, onRejected) {
    try {
      return MyPromise.resolve();
    } catch (e) {
      return MyPromise.reject();
    }
  }

  /**
   *
   *
   * @param {*} onRejected
   * @memberof MyPromise
   */

  catch(onRejected) {}

  /**
   * deal with fulfilled callback
   *
   * @memberof MyPromise
   */

  _onFulfilled(value) {}

  /**
   * deal with rejected callback
   *
   * @memberof MyPromise
   */

  _onRejected(reason) {}
}

/**
 * 返回一个状态为 `fulfilled` 的 `MyPromise` 实例
 *
 * @method resolve
 * @return {MyPromise}
 */

MyPromise.resolve = function(value) {
  return new MyPromise(resolved => {
    resolved(value);
  })
}

/**
 * 返回一个状态为 `rejected` 的 `MyPromise` 实例
 *
 * @method reject
 * @return {MyPromise}
 */

MyPromise.reject = function(reason) {
  return new MyPromise((null, rejected) => {
    rejected(reason)
  })
}
