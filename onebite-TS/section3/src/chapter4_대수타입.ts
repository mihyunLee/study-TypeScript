/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */

// string, number, boolean의 타입이 가능한 Union 타입
// Union 타입 내의 타입 개수는 무제한이다.
let a: string | number | boolean;
a = 10;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 💡 객체 타입의 Union
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "멍멍이",
  color: "brown",
};

let union2: Union1 = {
  name: "홍길동",
  language: "한글",
};

let union3: Union1 = {
  name: "뽀삐",
  color: "white",
  language: "mung mung",
};

// !ERROR, Dog와 Person 타입 중 어디에도 속하지 않기 때문에 에러 발생
// Union 타입은 어느 하나의 타입에 속하거나 혹은 교집합에 속해야 한다.
// let union4: Union1 = {
//   name: "김철수",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // -> never 타입, number 타입이면서 string 타입일 수 없기 때문

type Intersection = Dog & Person;

let intersection: Intersection = {
  // Dog와 Person 타입에 있는 모든 프로퍼티를 가지고 있어야한다.
  name: "김뽀삐",
  color: "white",
  language: "mung mung",
};
