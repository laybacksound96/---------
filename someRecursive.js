/*
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback.
The function returns true if a single value in the array returns true when passed to the callback.
Otherwise it returns false.

"someRecursive"이라는 재귀 함수를 작성해보세요.
이 함수는 배열과 콜백 함수를 인수로 받습니다.
배열에 있는 값 중 하나라도 콜백 함수에 전달했을 때 true가 반환되면 함수는 true를 반환합니다.
그렇지 않으면 false를 반환합니다.
*/
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// 1. 일단 배열을 순회하는 재귀함수부터 만들 수 있어야
const isOdd = (val) => val % 2 !== 0;
function someRecursive(arr, callback) {
  let length = 0;
  // add whatever parameters you deem necessary - good luck!
  function recursion(arr) {
    if (callback(arr[length])) {
      return true;
    }
    if (length === arr.length - 1) {
      return false;
    }
    length++;
    return recursion(arr);
  }
  return recursion(arr);
}
someRecursive([1, 2, 3, 4], isOdd);
