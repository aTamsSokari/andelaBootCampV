var dataTypes = function (data) {
	if (typeof data === 'boolean') {
		return data;
	}
	else if (typeof data === 'number') {
		if (data < 100) {
			return 'less than 100';
		}
		else if (data > 100) {
			return 'more than 100';
		}
		else if (data === 100) {
			return 'equal to 100';
		}
	}
	else if (typeof data === 'string') {
		return data.length;
	}
	else if (data instanceof Array) {
		if (data.length >= 3) {
			return data[2];
		}
		else {
			return undefined;
		}
	}
	else if (typeof data === 'function') {
		return data(true);
	}
	else {
		return 'no value';
	}
};

