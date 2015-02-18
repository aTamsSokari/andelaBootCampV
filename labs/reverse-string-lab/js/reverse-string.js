var reverseString = function(string) {
	if (string.length === 0) {
		return null;
	}
	else {
		var gnirts = string.split('').reverse().join('');
		if (string === gnirts) {
			return true;
		}
		else return gnirts;
	}
}
