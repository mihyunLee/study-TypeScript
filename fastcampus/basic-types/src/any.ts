// any: 어떤 타입이어도 상관 없는 타입
// 컴파일 타임에 어떤 값이 와도 타입 체크를 하지 않기 때문에
// 타입 안정성이 낮아 타입스크립트에서는 최대한 쓰지 않는 것이 좋다.
// 아무런 값이나 상관 없다는 것을 명시하고 싶을 때만 사용한다.
function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");
