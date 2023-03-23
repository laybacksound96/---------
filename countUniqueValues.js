/* 
Implement a function called countUniqueValues,
which accepts a sorted array, and counts
unique values in the array.
there can be negative numbers in the array,
but in will always be sorted
*/

function countUniqueValues(arrayParam) {
  const aa = {};
  for (var i = 0; i < arrayParam.length; i++) {
    aa[i] ? (aa[i] += 1) : (aa = 0);
    console.log(aa);
  }
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // => 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // => 7
countUniqueValues([]); // => 0
countUniqueValues([-2, -1, -1, 0, 1]); // => 4
