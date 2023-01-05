// 배열 타입 표현 방법 (1) - 타입[]
let list: number[] = [1, 2, 3];

// 배열 타입 표현 방법 (2) - Array<타입>
// jsx나 tsx에서 충돌날 가능성이 있어서 선호되지 않는 방식이다.
let list2: Array<number> = [1, 2, 3];

// 유니언 타입 + 배열 타입
let list3: (number | string)[] = [1, 2, "3"];

// 튜플 타입
// 순서, 요소의 수가 정해진 배열
let list4: [string, number];
list4 = ["Hi", 39];
// list4 = [39, "Hi"]; // ERROR
// list4[2] = "world" // ERROR: 길이가 정해져 있다.
