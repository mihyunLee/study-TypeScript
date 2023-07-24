/**
 * 타입 추론
 * 변수의 초기값을 기준으로 타입스크립트가 자동으로 타입을 추론한다.
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "노르",
  profile: {
    nickname: "nor",
  },
  urls: [""],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
  return "hello";
}

function func2(message = "hello") {
  return message;
}

// 💡 매개변수의 타입의 초기값이 없을 경우 추론할 수 없어 에러가 발생한다.
// function func(param) {}

/**
 * any 진화
 * 암묵적으로 any 타입을 추론할 경우 할당되는 값에 따라 변수의 타입이 진화한다.
 * any 타입을 정의하게 되면 진화하지 않고 해당 변수의 타입은 계속 any 타입이다.
 */

let d; // 초기값이 없어 암묵적으로 any 타입으로 추론된다.
d = 10; // any -> number로 진화
// d.toUpperCase(); //!ERROR, d는 현재 number 타입으로 추론된다.

d = "hello"; // number -> string으로 진화
d.toUpperCase(); // d는 현재 string 타입으로 추론된다.

// 💡 const 키워드의 경우 리터럴 타입으로 추론된다.
const num = 10;
const str = "hello";

// 💡 배열의 경우 최적의 타입으로 추론된다.
let arr = [1, "string"];
