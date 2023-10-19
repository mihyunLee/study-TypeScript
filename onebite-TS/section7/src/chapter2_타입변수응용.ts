/**
 * 첫 번째 사례.
 * - 매개변수의 타입이 서로 다른 경우
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두 번째 사례.
 * - 타입 변수 + 다른 타입 결합
 */

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0
// let num: number

let str = returnFirstValue(["hello", "mynameis"]);
// "hello"
// let str: string

let union = returnFirstValue([1, "hello", "mynameis"]);
// 1
// let union: number | string

/**
 * 두 번째 사례 응용.
 * - 반환 값이 유니온 타입이 아닌 명확한 타입이길 원할 때
 */

function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let rtrValue = returnFirstValue2([1, "hello", "mynameis"]);
// 1
// rtrValue: number

/**
 * 세 번째 사례.
 * - 타입 변수를 확장하여 제한하기
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
// 3

let var2 = getLength("12345");
// 5

let var3 = getLength({ length: 10 });
// 10

// let var4 = getLength(10); // !ERROR, number 타입은 length 속성이 없기 때문에 타입 에러가 발생
