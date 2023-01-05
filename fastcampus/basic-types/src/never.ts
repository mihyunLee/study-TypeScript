// never: 반환 타입으로 사용된다.
// never는 모든 타입에 할당 할 수 있지만, never에는 어떤 것도 할당할 수 없다.
// never는 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.

function error(message: string): never {
  throw new Error(message);
}

// fail의 리턴 타입이 never로 추론된다.
function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = "hello";
let b: number = 1;

if (typeof a !== "string") {
  //   a = b;
  // string 타입인 a가 string이 아닐 때, a는 never 타입으로 추론된다.
  // 따라서 어떠한 값도 a에 할당할 수 없으므로
  // 잘못된 타입을 넣는 실수를 막고자 할 때 never를 사용하기도 한다.
}
