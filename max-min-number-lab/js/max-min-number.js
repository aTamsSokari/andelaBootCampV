var findMinMax = function(array) {
	var min = Math.min.apply(Math, array);
	var max = Math.max.apply(Math, array);
	
	if (min === max) {
		return [min];
	}

	return [min, max];
};
