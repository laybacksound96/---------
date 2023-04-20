/*
naiveStringSearch

  Loop over the longer string
  Loop over the shorter string
  If the characters don't match, break out of the inner loop
  If the characters do match, keep going
  If you complete the inner loop and find a match, increment the count of matches
  Return the count

f('wowomgzomg','omg') -> 2
*/

function naiveStringSearch(long, short) {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    if (long[i] == short[0]) {
      let subPointer = i;
      let j = 0;
      while (long[subPointer] === short[j] && j < short.length) {
        if (long[subPointer] === short[short.length - 1]) counter++;
        subPointer++;
        j++;
      }
    }
  }
  return counter;
}
naiveStringSearch("wowomgzomg", "omg");
