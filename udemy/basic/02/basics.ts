// (1) '매개변수: 타입' 으로 타입을 배정한다.
function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

// (2) 상수나 변수에 값이 할당되어 있다면 타입스크립트는 '타입 추론'을 할 수 있다.
let num1 = 5;
let num2 = 2.8;
const printResult = true;

// (3) 만약 추론한 타입과 다른 타입의 값이 들어가면 에러가 발생한다.
// num1 = '7';

// (4) 타입 추론을 이용하지 않고, 직접 타입을 배정할 수도 있다.
let num3: number;
num3 = 11;

add(num1, num2, printResult);
