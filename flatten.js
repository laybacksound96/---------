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

// 04-06, 20:00
// 배열의 전체요소를 순회하지 않는 문제가 있다.
// 예컨대 flatten([1, [2, [3, 4], [[5]]]]) 는 [1, 2, 3, 4]를 반환한다.
// flatten([[1],[2],[3]]) 도 [1]만 반환한다.
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) 도 [1]만 반환했다.

// 왜 이런 문제가 발생했을까?
// 종료조건이 적절하지 않은 것 같다.
// 배열 속에 배열이 있으면 내부 배열을 순회하는데
// 외부 배열에 요소가 남아있건말건 내부 배열의 연산만 끝나면 함수가 종료되는 게 문제인 듯 하다

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  function recursion(arr) {
    // 종료조건 -> 해당 배열의 모든 요소를 순회하면 끝나야 됨
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        recursion(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  return recursion(arr);
}
