Array.prototype.toTwenty = function() {
    /*
  * return [1, 2 . . . 20]
  */
  var oneToTwenty = [];
  for (var i = 1; i <= 20; i++) {
    oneToTwenty.push(i);
  }
  return oneToTwenty;
};

Array.prototype.toForty = function() {
  /*
  * return [2, 4, . . . 40]
  */
  var twoToForty = [];
  for (var i = 2; i <= 40; i+=2) { 
    twoToForty.push(i);
  }
  return twoToForty;
};

Array.prototype.toOneThousand = function() {
    /*
  * return [10, 20 . . . 1000]
  */
  var tenToOneThousand = [];
  for (var i = 10; i <= 1000; i+=10) {
      tenToOneThousand.push(i);
  }
  return tenToOneThousand;
};

Array.prototype.search = function (n) {
  /*
 * Binary search implementation to return
 * {count : c, index: i, length: n}
 */

  /*minSAI means 'minimum Sub Array Index',
    maxSAI means 'maximum Sub Array Index',
    midSAI means 'current Sub Array Index'.*/
  var maxSAI = this.length - 1;
  var minSAI = 0;
  var midSAI;

  var search = {
    count: 0,
    index: midSAI,
    length: this.length
  };

  while (minSAI <= maxSAI) {
    midSAI = Math.floor((minSAI + maxSAI) / 2);
    if (this[minSAI] === n || this[maxSAI] === n) {
      if (this[maxSAI] === n) {
        search.index = maxSAI;
      }
      else {
        search.index = minSAI;
      }
      return search;
    }
    /*mid = Math.floor((right + left) / 2);
        if (this[mid] < n) {
            left = mid + 1;
            right--;
        }
        else if (this[mid] > n) {
            right = mid - 1;
            left++;
        }
        else {
            obj.index = mid;
            return obj;
        }
        obj.count++;*/
    
    if (this[midSAI] < n) {
      minSAI = midSAI + 1;
      maxSAI--;
    }
    else if (this[midSAI] > n) {
      maxSAI = midSAI - 1;
      minSAI++;
    }
    else {
      search.index = midSAI;
      return search;
    }
    search.count++;
  }
  search.index = -1;
  return search;
};