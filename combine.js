var add = function(a, b) {
	return a + b;
};

var sub = function (a, b) {
	return a - b;
};

var combine = function(a, b, c) {
	return c ? add(a, b) : sub(a, b);
};

console.log(combine(1, 2, false));