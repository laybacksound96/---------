/*
fib
Write a recursive function called fib
which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
which starts with 1 and 1, and where every number thereafter is equal
to the sum of the previous two numbers.
*/
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
/*
파보나치 수열에서 n번째 숫자를 반환하는 재귀 함수인 fib를 작성하세요.
파보나치 수열은 1, 1, 2, 3, 5, 8, ...과 같이 시작값이 1과 1이며,
이후 모든 숫자가 이전 두 숫자의 합과 같은 수열입니다.
*/
function fib(n) {
  let firstNum = 0;
  let secondNum = 1;
  let count = 0;
  function innerFib(n) {
    if (count === n) {
      return;
    }
    count++;
    const firstNumCopy = firstNum;
    firstNum = secondNum;
    secondNum += firstNumCopy;
    return innerFib(n);
  }
  innerFib(n);
  return firstNum;
}
fib(28);
