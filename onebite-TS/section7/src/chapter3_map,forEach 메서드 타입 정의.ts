/**
 * map 메서드
 */

const arr = [1, 2, 3];

// JS의 map
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

// map 메서드 새로 정의하기
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2); // it: number
map(["hi", "hello"], (it) => parseInt(it)); // it: string

/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];

// JS의 forEach
arr2.forEach((it) => console.log(it));

// forEach 메서드 새로 정의하기
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  console.log(parseInt(it));
});
