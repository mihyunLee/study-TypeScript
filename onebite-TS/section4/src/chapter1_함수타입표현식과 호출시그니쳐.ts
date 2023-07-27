/**
 * 함수 타입 표현식 (function type expression)
 * 호출 시그니쳐라고 불리기도 하지만 타입스크립트 공식 문서에서는 함수 타입 표현식이라 한다.
 *
 * 타입 별칭을 이용하여 함수의 타입을 정의하는 것
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 *
 * 함수 타입 표현식처럼 함수 타입을 분리해서 정의할 수 있다.
 * 차이점은 객체처럼 정의한다는 것인데, 이는 자바스크립트의 함수 또한 객체이기 때문이다.
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입으로 매개변수 외의 추가 타입을 정의해줄 수 있다.
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;
