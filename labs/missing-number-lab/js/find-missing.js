// JavaScript source code
//work
/*var findMissing = function (array1, array2) {
var array1Length = array1.length;
var array2Length = array2.length;
// loop through array2
for (var i = 0; i < array2Length; i++) {
  // look for same thing in array1
  if (array1.indexOf(array2[i]) == -1)
    return array2[i];
}
// loop through array1
for (var i = 0; i < array1Length; i++) {
  // look for same thing in array2
  if (array2.indexOf(array1[i]) == -1)
    return array1[i];
}
return 0;
// look for different thing in array2 
};
*/
//another way to do this function, works for one missing number only 
function findMissing(array1, array2) {
  var arrSum = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
  };
  var array1Sum = arrSum(array1);
  var array2Sum = arrSum(array2);
  return (array1Sum === array2Sum) ? 0 : Math.abs(array1Sum - array2Sum);
}