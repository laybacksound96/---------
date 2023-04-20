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

// A. 중간값을 기준으로 범위를 반절씩 좁혀서 검색을 수행한다.
// B. 범위가 1이 되었을 때,
//    그 범위에 있는 하나의 값이 검색하고자하는 값이면 초기 배열의 해당하는 값 인덱스를 반환한다.
// C. 값이 서로 일치하지 않으면, 배열에 찾고자하는 값이 없다는 의미이므로 -1을 반환한다.

// 0. 배열은 정렬되어 있다고 가정한다.
// 1. 배열의 중간값(Median)을 찾는다. // [1, 24, 56, 90 , 144]에선 56일것이다.
// 2. 중간값과 찾고자하는 값을 비교한다. 144를 찾고있다면, 56보다 큰지를 확인한다.
//    2-1. 56보다 크다면, 배열의 중간값 인덱스는 10보다 크고 20보다 작을 것이다.
//    2-2. 10과 20의 중간값을 다시 중간값 인덱스에 할당하고 값을 비교한다.
//    2-3. array[15]는 86이다. 찾고자하는 값인 95와 비교한다.

// 전체 길이 20
// 첫번째 중간인덱스 10
// 찾고자하는 값 - 95
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
