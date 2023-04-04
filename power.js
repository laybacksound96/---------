/*
power
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()
  - do not worry about negative bases and exponents.

*/

//X^n꼴의 제곱을 하는 함수 만들기

function power(x, n) {
  if (n === 0) {
    return 1;
  }
  return x * power(x, n - 1);
}
