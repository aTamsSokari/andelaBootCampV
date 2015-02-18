'use strict';
var stringLength = function (words) {
	if (typeof words === 'string') {
		return [words.length];
	}
	if (words instanceof Array) {
		var arrayWords = [];
		for (var i = 0; i < words.length; i++) {
			arrayWords.push(words[i].length);
		}
		return arrayWords;
	}
	if (words instanceof Object) {
		var objectWords = [];
			for (var properties in words) {
				objectWords.push(words[properties].length);
		}
		return objectWords;
	}
};
