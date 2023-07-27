/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 💡 예시1.
// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func() {}

// 함수의 구현부에 있는 타입을 따르지 않고 오버로드 시그니쳐에 있는 버전을 따른다.
// func(); // !ERROR
func(1);
// func(1, 2); // !ERROR
func(1, 2, 3);

// 💡 예시2.
// 버전들 -> 오버로드 시그니쳐
function func2(a: number): void;
function func2(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
// 오버로드 시그니쳐의 매개변수에 버전별 차이가 있다면
// 최대한 모든 오버로드 시그니쳐를 만족하도록 선택적 매개변수 등으로 정의해주어야 한다.
function func2(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func2(1);
func2(1, 2, 3);
