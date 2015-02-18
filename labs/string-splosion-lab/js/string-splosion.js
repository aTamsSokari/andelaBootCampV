'use strict';
var  StringSplosion = function(string) {
	this.string = string;
	this.newStringArray = [];
}

StringSplosion.prototype.manipulate = function() {
	for (var i = 0; i <= this.string.length; i++) {
		this.newStringArray.push(this.string.substring(0,i));
	};
	return this.newStringArray.join('');
}
