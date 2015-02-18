'use strict';
function words(str) {
	var obj = {};
	var min = str.split(/\s+/);	
	for(var i = 0; i < min.length; i++) {
         if(!obj.hasOwnProperty(min[i])){
             obj[min[i]] = 1;
         }
         else{
         	obj[min[i]] += 1;
         }
	}
	return obj;
}
