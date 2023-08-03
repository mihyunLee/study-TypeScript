/**
 * 선언 합침
 */

//* 타입 별칭의 경우 동일한 이름은 에러가 발생한다.
// type Person = {
//   name: string;
// };

// type Person = {
//   age: number;
// };

//* 인터페이스는 동일한 이름으로 정의하면 자동으로 선언이 합쳐진다.
interface Person {
  name: string;
}

interface Person {
  // name: "number"; // !ERROR, 타입 합침의 경우 동일한 타입만 재정의 가능하다.
  age: number;
}

interface Developer extends Person {
  name: "Ash"; // 타입 확장의 경우는 서브 타입이어도 재정의 가능하다.
}

const person: Person = {
  name: "",
  age: 0,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  // 인터페이스 합침을 통해 안정성을 높여 타입을 합칠 수 있다.
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello", // 기존의 라이브러리에서 제공하는 객체를 보강하는 경우
};
