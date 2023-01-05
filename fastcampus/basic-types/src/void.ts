// void는 값으로 사용할 수 없다.
// 값을 반환하지 않는다는 의미로, 리턴 타입으로 사용한다.

// 타입 추론에 의해 리턴 타입이 void 인 것을 알 수 있다.
function returnVoid(message: string) {
  console.log(message);
}

const r = returnVoid("리턴이 없다.");
// const ru: undefined = returnVoid("리턴이 없다."); // ERROR: undefined에 void를 할당할 수 없다.
