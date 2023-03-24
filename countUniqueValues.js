function countUniqueValues(arrayParam) {
  // add whatever parameters you deem necessary - good luck!
  /*
  Implement a function called countUniqueValues,
  which accepts a sorted array, and counts the unique values in the array.
  There can be negative numbers in the array, but it will always be sorted.

  [example]--------------------------------
  - countUniqueValues([1,1,1,1,1,2]) // 2
  - countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
  - countUniqueValues([]) // 0
  - countUniqueValues([-2,-1,-1,0,1]) // 4
  -----------------------------------------
  - Time Complexity - O(n)
  - Space Complexity - O(n)
  -----------------------------------------
    **Bonus
    You must do this with constant or O(1) space and O(n) time.
  -----------------------------------------
  
  */

  /*
     요구사항 - 배열 고유값의 개수를 세고 반환
     입력값 - 정렬된 배열
     반환값 - 고유값의 개수
    */

  // 접근 A (frequency counter를 활용)
  // => deprecated. 스크립트가 object.prototype.keys()를 지원하지 않음.

  // 접근 B (연관배열을 만들어 frequency counter를 모사)
  // 1. key=[] value=[] 라는 이름으로 두개 할당해보자
  // 2. 배열의 i번째 요소를 가져온다.
  // 3. i가 key에 있는지 찾고 (몇번 인덱스인지도 알아야 할 것)
  // 4. key에 없다면, 새로 삽입한다. 이때 value도 같이 1을 삽입한다.
  // 5. key에 있다면, value[i가 있던 인덱스번호] 에 1을 더해보자.
  // 6. (2-5) 반복 => O(n)
  // 7. key의 길이 구하고 반환.
  // => deprecated. 시간복잡도가 O(n^2)이라 안 됨

  // 접근 C
  // 배열에서 중복되는 요소들을 제거해보면 어떨까?
  // A-1. '중복된 요소'는 어떻게 정의할 것인가?
  //  A-2.  (중복된 요소에 대한 정의) -
  //        두 포인터 a, b가 가리키는 배열의 요소의 차가 0이면, a=b라고 할 수 있다.
  // B-1. '중복된 요소'를 어떻게 찾을 것인가?
  //  B-2. multiple pointer를 응용해보자.
  //       1. 두 포인터는 양극단(인덱스와 처음(i)과 끝(length-1))에 있다.
  //       2. (length-1) - i를 구한다. (length-1) - i인 이유는 정렬된 배열이기 때문.
  //       3. 차이가 양수가 나오면 끝의 인덱스를 한칸 내려보자. 어차피 순회를 다 할 필요가 없다
  //       4. 차이가 음수가 나오면 시작점의 인덱스를 한칸 올린다.
  //       5. 차이가 0이면 시작점 인덱스에 해당하는 요소를 삭제한다.
  //       6. 시작점 포인터가 끝점 포인터보다 작은 동안 2-5 반복 (포인터는 서로 교차되지 않는다)
  //
  // => deprecated. B-2의 5, 인덱스에 해당하는 요소 삭제메서드가 없음

  // 접근 D (힌트봐버림)
  //

  let i = 0;
  let j = 1;
  while (j < arrayParam.length) {
    if (arrayParam[i] === arrayParam[j]) {
      j++;
    } else {
      i++;
      arrayParam[i] = arrayParam[j];
    }
  }
  return i === 0 ? 0 : i + 1;
}
