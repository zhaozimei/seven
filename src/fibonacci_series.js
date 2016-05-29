'use strict';

function fibonacci_series(n) {
  var arr = [];
	arr[0] = 0;
	arr[1] = 1; 
	for(var i=2; i<n+1; i++){
		var k=arr[i-2]+arr[i-1]
		arr.push(k)
	}
return arr;
}

module.exports = fibonacci_series;
