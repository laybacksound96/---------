/*
reverse
Write a recursive function called reverse 
which accepts a string and returns a new string in reverse.
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
