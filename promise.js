const PENDING  = Symbol("pending")
const FULFILLED = Symbol("fulfilled")
const REJECTED = Symbol("rejected")

class MyPromise {
	constructor(fn) {
		this.state = PENDING
		fn.call(this.onFulfilled, this.onRejected)
	}

	onFulfilled(value) {
	}

	onRejected(reason) {
	}

	transition() {
	}
	
	then() {}

	catch() {}
}

