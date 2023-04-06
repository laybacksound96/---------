/*
reverse
Write a recursive function called reverse 
which accepts a string and returns a new string in reverse.
*/

/*
리버스라고 불리는 재귀함수를 작성해 봅시다!
문자열을 받아야하고, 새로운 뒤집힌 문자열을 반환해야 합니다.

*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
function reverse(string) {
  // add whatever parameters you deem necessary - good luck!
  let reversedWord = "";
  const length = string.length;
  function stringMaker(length) {
    if (length === 0) {
      return string[0];
    } else {
      reversedWord += string[length - 1];
      return stringMaker(length - 1);
    }
  }
  stringMaker(length);
  return reversedWord;
}
