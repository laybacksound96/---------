function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  // 두 문자열을 입력받는다.
  // 애너그램인지, 아닌지를 Boolean으로 리턴한다.
  // 두 str의 빈도수를 오브젝트로 저장하자.
  const obj1 = makeFrequency(str1);
  const obj2 = makeFrequency(str2);
  // aaz -> {a:2 ,z:1} zza -> {a:1,z:2}

  // a) 각 오브젝트가 보유한 키값이 같은지 판단하자.
  for (const key in obj1) {
    if (!obj2[key]) {
      return false;
    }
  }
  // b) 각 오브젝트의 밸류값 (빈도)도 같은지 판단하자.
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;

  // a , b를 모두 통과하면 애너그램이라고 할 수 있겠다.
  function makeFrequency(str) {
    const result = {};
    for (const index in str) {
      if (!result[str[index]]) {
        result[str[index]] = 1;
      } else {
        ++result[str[index]];
      }
    }
    return result;
  }
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
