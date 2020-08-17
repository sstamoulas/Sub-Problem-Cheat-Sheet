//memoization is great way to reduce the time and possibly space complexity of a recursive algorithm by caching previously stored results and accessing them faster.

function memoize(fn){
  const cache = {}
  return function(...args){
    if (cache[args]){
      return cache[args];
    }
    newCall = fn.apply(null, args);
    cache[args] = newCall;
    return newCall;
  }
}

// Example of usage: 

function getNthFib(n) {
  // Write your code here.
	if(n == 1) {
		return 0
	}
	else if(n == 2) {
		return 1
	}
	else {
		return fastFib(n - 1) + fastFib(n - 2) // call fastFib recursively
	}
}

const fastFib = memoize(getNthFib); // pass getNthFib as a param

// Do not edit the line below.
exports.getNthFib = getNthFib;



// Specific for fibonacci sequence
// O(n) time | O(n) space
function getNthFib(n, memoize = {1: 0, 2: 1}) {
	if(n in memoize) {
		return memoize[n]
	} else {
		memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
	}
}
