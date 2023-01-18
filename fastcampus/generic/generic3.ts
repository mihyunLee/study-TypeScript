// 매개변수를 T의 배열로 받는다.
function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(["Hello", "World"]); // T는 string 타입으로 추론된다.
helloArray(["hello", 39]); // T는 string | number 타입으로 추론된다.

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(["Hello", "World"]);
helloTuple(["Hello", 39]);
