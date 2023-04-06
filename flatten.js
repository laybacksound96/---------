/*
flatten
Write a recursive function called flatten
which accepts an array of arrays and returns a new array with all values flattened.
*/

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// 접근 A .
//   1. 빈 배열을 만들자.
//   2. 배열의 모든 요소를 순회하는 함수를 만든다.
//   3. 순회하는 배열의 원소가 값이면 빈 배열에 넣는다.
//   4. 배열이면 3을 다시 실행한다.

//오류 - undefined 하나 추가댐
function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  let lengthCount = 0;
  function recursion(arr) {
    if (lengthCount > arr.length) {
      return newArr;
    }
    if (typeof arr[lengthCount] === "object") {
      let tempLengthCount = lengthCount;
      lengthCount = 0;
      return recursion(arr[tempLengthCount]);
    } else {
      newArr.push(arr[lengthCount]);
      lengthCount++;
      return recursion(arr);
    }
  }
  return recursion(arr);
}
