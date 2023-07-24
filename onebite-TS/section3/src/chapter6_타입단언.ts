/**
 * 타입 단언 (Type assertion) - as
 */

type Person = {
  name: string;
  age: number;
};

// 💡 빈 객체로 초기화하고 나중에 값을 할당하고 싶을 때는 어떻게 해야할까?
// let person: Person = {}; // !ERROR, name과 age 프로퍼티가 없다.
let person = {} as Person; // 초기화 값의 타입을 단언하기, as 뒤의 타입으로 간주해라~
person.name = "노르";
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * -> 단언식: 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나, A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // !ERROR, 단언 실패

// 💡 타입 단언을 무조건 되게 하는 방법
// 사이에 unknown 타입을 끼고 다중 단언을 한다.
// -> 추천하지 않는 방법, 타입스크립트를 쓰는 이유가 없어진다.
let num4 = 10 as unknown as string;

/**
 * const 단언
 * A as const
 * 변수를 const로 선언했을 때와 동일한 효과를 준다.
 */

let num5 = 10 as const; // -> num5: 10

// 💡 객체 as const: 모든 프로퍼티가 readonly 프로퍼티가 된다.
let cat = {
  name: "야옹이",
  color: "cheeze",
} as const;

// 프로퍼티가 readonly이기 때문에 수정할 수 없음
// cat.name = ""; // !ERROR

/**
 * Non Null 단언
 * -> !: Non Null 단언 연산자
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  // 💡 Non Null 단언 연산자를 사용하게 되면 해당 값이 무조건 있을 것으로 확신하기 때문에 해당 프로퍼티가 객체에 없더라도 에러가 발생하지 않는다.
  // 따라서 주의해서 사용할 것!
  // author: "노르",
};

// const len1: number = post.author?.length; // ! ERROR: len의 타입이 number | undefined이 되기 때문에 에러 발생
const len2: number = post.author!.length; // '!' 연산자는 앞에 있는 값이 Non이거나 Null이 아닐 것이라고 확신한다. 따라서 undefined가 무조건 나오지 않도록!
