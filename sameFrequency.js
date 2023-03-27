function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  /*
Frequency Counter - sameFrequency
---------------------------------


Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

1) console.log(sameFrequency(182,281)) // true
2) console.log(sameFrequency(34,14) )// false
3) console.log(sameFrequency(3589578,) 5879385) // true
4) console.log(sameFrequency(22,222) )// false

Q. 각 숫자의 자릿수의 빈도수가 같은지 확인하는 방법을 찾아보세요.

*단, 각 숫자 a, b 는 a > 0, b > 0을 갖는 정수이다.

입력값은 0보다 큰 정수 두 개이다.
출력값은 두 수의 자릿수 빈도가 같은지를 평가하여 반환되는 boolean이 되어야 함

frequency counter를 어떻게 적용시킬 것인가?

당장 떠오르는 접근 -> 각 정수를 문자열로 형변환시켜 자릿값을 순회하여 빈도수 찾기
-> 일반적인 해결책이 아님(자료형의 암묵적 형변환은 자바스크립트에서나 해줌)

조금 더 수리적인 접근 필요 ->

1) 정수가 갖는 최대자리수를 파악 
    1-1) 최대자리수는 어떻게 얻을 것인가?
        a. 주어진 정수를 N이라고 가정하자.
        b. N을 10으로 몫이 10보다 작아질 때까지 나눈다.
        c. 나눈 횟수를 p라고 하자.
        d. 자릿수는 10^p 아닐까?

        1,596,612 -> 는 100만의 자리수이므로, 10의 6제곱이 되어야 함
        따라서 정수 N이 10^p의 자릿수를 가지고 있을 때, 
        각 자릿수에 해당하는 digit이 1의자리부터 p의자리까지 a ,b ,c,d...로 할당된다면
        p=6일 경우...
        N = a+(b*10^(p-5))+(c*10^(p-4))+(d*10^(p-3))+(e*10^(p-2))+(f*10^(p-1))+(g*10^p)
        로 일반화시킬 수 있겠다.

2) 각 자리수에 곱해진 값을 찾기
3) 자리수를 키로, 곱해진 값을 밸류로 오브젝트에 할당
4) 두 오브젝트의 키값에 할당된 밸류들이 같은지 검사




*/

  function frequencyCounter(number) {
    let num1 = {};
    while (number > 0) {
      num1[number % 10] ? (num1[number % 10] += 1) : (num1[number % 10] = 1);
      number = (number - (number % 10)) / 10;
    }
    return num1;
  }

  const n1 = frequencyCounter(num1);
  const n2 = frequencyCounter(num2);

  for (var i = 1; i < 10; i++) {
    if (n1[i] !== n2[i]) {
      return false;
    }
  }
  return true;
}
