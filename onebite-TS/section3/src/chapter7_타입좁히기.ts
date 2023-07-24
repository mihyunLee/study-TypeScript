/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 *
 * 타입 좁히기에서 사용되는 조건문 등을 '타입 가드'라고 부른다.
 */

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
  // value.toUpperCase(); // !ERROR
  // value.toFixed(); // !ERROR

  if (typeof value === "number") {
    // 이 안에서는 value의 type이 number
    // number 타입임이 보장되기 때문에 타입스크립트는 해당 변수를 union 타입에서 number 타입으로 타입을 좁힌다.
    // 따라서 number의 메서드를 사용할 수 있다.
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    // 이 안에서는 value의 type이 string
    console.log(value.toUpperCase());
  }
}

/**
 * 타입 가드 - instanceof
 */

// 💡 Date 객체와 같이 NodeJS가 기본적으로 제공하는 내장 객체에 대해서는 타입이 기본적으로 제공된다.
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

/**
 * 타입 가드 - in
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
