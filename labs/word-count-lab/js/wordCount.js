'use strict';
function words(str) {
	var wordCounts = {};
	var allWords = str.split(/\s+/);
	for (var i = 0; i < allWords.length; i++) {
		wordCounts[allWords[i]] = (!wordCounts.hasOwnProperty(allWords[i]) ? 1 : wordCounts[allWords[i]] + 1);
	}
	return wordCounts;
}
