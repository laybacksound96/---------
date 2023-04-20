function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const temp1 = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp1;
  }
  return arr;
}

BubbleSort([3, 53, 14, 5, 49]); // [3,5,14,49,53]

//BubbleSort([26, 2, 1, 30, 33, 21, 33, 6, 49, 10, 43, 41, 3, 28, 37]);
