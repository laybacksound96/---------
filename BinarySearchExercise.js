/*
Binary Search Exercise

Write a function called binarySearch
which accepts a sorted array and a value and returns the index at which the value exists.
Otherwise, return -1.

Examples:

    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
*/

// A. 변수 두개를 사용해서 범위를 표현한다.
// B. 중간값을 기준으로 범위를 반절씩 좁혀서 검색을 수행한다.
// C. 범위가 1이 되었을 때, (범위 인덱스의 차이가 1일때, 예컨대, left=17,right=18같은 경우)
//    해당 범위에서 찾고자하는 값이 있으면 그 값의 인덱스를 반환한다.
//    없으면 -1을 반환한다.

function binarySearch(array, value) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0; //9
  let right = array.length - 1;

  function performBinarySearch() {
    let middleIndex = Math.floor((left + right) / 2);
    if (Math.abs(left - right) === 1) {
      if (array[left] === value) {
        return left;
      } else if (array[right] === value) {
        return right;
      } else {
        return -1;
      }
    }
    if (array[middleIndex] < value) {
      left = middleIndex;
      return performBinarySearch();
    } else {
      right = middleIndex;
      return performBinarySearch();
    }
  }
  return performBinarySearch();
}
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
);
