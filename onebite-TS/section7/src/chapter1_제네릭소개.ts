/**
 * 제네릭
 * : 일반적인, 포괄적인
 *
 * - 제네릭 함수
 * 함수의 인수에 따라서 반환값의 타입을 가변적으로 설정할 수 있다.
 * 즉, 모든 타입에 사용할 수 있는 범용적인 함수
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase(); // 매개변수의 타입을 any로 지정하게 되면 String 메서드인 toUpperCase를 사용해도 에러가 발생하지 않는다.

let bool = func(true);

let str = func("string");

// 타입 변수(T) 직접 지정
// arr은 number[] 타입이 아닌 [number, number, number] 튜플 타입이 된다.
let arr = func<[number, number, number]>([1, 2, 3]);
