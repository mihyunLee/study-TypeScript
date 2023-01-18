function helloString(message: string): string {
  return message;
}

function helloNumber(messsage: number): number {
  return messsage;
}

function hello(message: any): any {
  return message;
}

console.log(hello("Mark").length);
console.log(hello(39).length); // any 타입이라면, 매개변수가 number 형이어도 length 사용가능

// Generic, 함수 안에서 매개변수의 타입에 따라 T를 기억한다.
function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric("Mark").length); // 인자가 "Mark"인 리터럴 타입이므로 T는 "Mark" 문자형 리터럴 타입이 된다.
// console.log(helloGeneric(39).length); // ERROR, 숫자형 리터럴로 추론이 되어 length를 사용하면 에러가 발생한다.
