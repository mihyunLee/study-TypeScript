// declare 키워드를 사용하면 값이 아닌 타입만 정의할 수 있다.
// declare로 변수나 함수, 타입을 정의하게되면 컴파일러에게
// 힌트를 주는 역할의 코드이기 때문에 js로 변환되지 않는다.

// unknown은 any와 비슷하게 값의 타입을 알 수 없을 때 배정할 수 있다.
// 따라서 any 보다는 런타임 에러를 줄일 수 있다.
declare const maybe: unknown;

// ERROR
// const a: number = maybe;

// type guard
// type guard를 사용하면 조건문에서 객체의 타입을 좁혀나갈 수 있다.
// unknown 타입은 type guard를 통해 타입이 확정될 시에
// 다른 값에 할당할 수 있다.
if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
