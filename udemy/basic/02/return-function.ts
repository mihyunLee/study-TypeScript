// (1) 반환 타입 - 함수명: 타입
// 함수를 정의할 때 함수의 반환 값에 대한 타입을 지정할 수 있다.
// add 함수의 반환 타입을 number로 지정
// n1.toString() + n2를 반환할 경우 에러 발생
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void 타입 - 함수에서 반환 값이 없을 경우 갖는 타입
// printResult는 출력을 하지만 리턴은 하지 않으므로 void 타입이다.
// void 타입은 명시적으로 지정할 수 있지만 타입 추론을 통해 생략할 수 있다.
function printResult(num: number): void {
  console.log("Result: " + num);
}

console.log(printResult(add(4, 12))); // undefined

// (2) 함수 타입

// (2-1) 함수 타입을 지정할 수 있지만 어떤 함수를 할당받든 에러가 발생하지 않는다.
let combineValues1: Function;
// (2-2) 매개변수와 리턴값에 대한 타입을 정한 함수 타입을 지정하면서
// 그 외의 타입이 할당될 경우 에러를 발생시킨다.
let combineValues2: (a: number, b: number) => number;

combineValues2 = add;

console.log(combineValues2(8, 8));

function addAndHandle(
  n1: number,
  n2: number,
  callback: (value: number) => void
) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (val) => {
  console.log(val);
  return val;
});
