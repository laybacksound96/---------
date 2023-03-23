/* 
Implement a function called countUniqueValues,
which accepts a sorted array, and counts
unique values in the array.
there can be negative numbers in the array,
but in will always be sorted
*/

function countUniqueValues(arrayParam) {
  var aa = {};
  for (var i = 0; i < arrayParam.length; i++) {
    aa[arrayParam[i]] ? (aa[arrayParam[i]] += 1) : (aa[arrayParam[i]] = 1);
  }
  return keys(aa).length;
}

// 1) 배열의 같은 숫자를 frequency couter로 모아보자
// 1-1) [1,1,1,1,2] => {1:4 , 2:1}
// 1-2) 배열의 인덱스를 순회해서 값이 있으면 1을 더하고 없으면 1을 할당하고
// 2) 그 카운터의 길이가 고유값 개수 아닌가?

countUniqueValues([1, 1, 1, 1, 1, 2]); // => 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // => 7
countUniqueValues([]); // => 0
countUniqueValues([-2, -1, -1, 0, 1]); // => 4
