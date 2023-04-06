/*
isPalindrome
Write a recursive function called isPalindrome which returns true 
if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.

"isPalindrome"이라는 재귀 함수를 작성해야 합니다.
이 함수는 입력된 문자열이 palindrome
(앞에서부터 읽으나 뒤에서부터 읽으나 동일한 문자열)인 경우 true를 반환하고,
그렇지 않은 경우 false를 반환해야 합니다.
즉, "isPalindrome" 함수는 문자열이 대칭인지 아닌지를 판단하는 함수입니다.
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// 접근 A
// 1. 문자열의 길이만큼 각 char을 순회하며 검사를 실시해본다.
// 2. '검사' 란 무엇인가?
//  2-1. 검사할 인덱스 i에서 i-1과 i+1을 비교한다.
//       (예를들어, 'tacocat' 에서 세번째 'c'는 'a'와 'o'를 비교한다.)
// -폐기(글러먹었음)

// 접근 B
// 1.문자열의 길이가 홀수일 경우와 짝수일 경우를 분리하고, 각 값의 '중앙값'을 구해보자.

//   1-1.홀수일 경우 (예를 들어 7)엔 2로 나눈 몫의 +1이다.7->4 9->5
//       1-1-a. 7일 경우에 이어서 -
//              중앙값 4의 + 1, -1값이 같은지를 비교하고, +2, -2값이 같은지...반복한다.
//              tac[o]cat
//             ta[c]o[c]at -> []속이 다르면 false
//             t[a]coc[a]t -> []속이 다르면 false
//             [t]acoca[t] -> []속이 다르면 false

//   1-2.짝수일 경우 (예를 들어 6) 2로 나눈 몫과 몫의 +1로 비교한다
//       1-2-a. 6일 경우에 이어서 -
//              다이[씀][씀]이다
//              다[이]씀씀[이]다
//              [다]이씀씀이[다]

//  1-3. 문자열의 첫글자와 끝글자가 같을때까지 도달하고도
//       false가 아니면 palindrome이라고 할 수 있겠다.

function isPalindrome(string) {
  // add whatever parameters you deem necessary - good luck!
  let left;
  let right;
  if (string.length % 2) {
    left = Math.floor(string.length / 2 - 1);
    right = Math.floor(string.length / 2 + 1);
  } else {
    left = Math.floor(string.length / 2 - 1);
    right = Math.floor(string.length / 2);
  }
  function isValidPalindrome(left, right) {
    if (string[left] !== string[right]) return false;
    if (right === string.length) {
      return true;
    }
    return isValidPalindrome(left - 1, right + 1);
  }
  return isValidPalindrome(left, right);
}

isPalindrome("awesome"); // false
