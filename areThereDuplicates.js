/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true

*/
function areThereDuplicates(...rest) {
  // good luck. (supply any arguments you deem necessary.)
  var left = 0;
  var right = 1;
  while (left < right) {
    if (rest[left] === rest[right]) {
      return true;
    } else if (right >= rest.length) {
      return false;
    } else if (right === rest.length - 1) {
      left++;
      right = left + 1;
    } else {
      right++;
    }
  }
  return false;
}
