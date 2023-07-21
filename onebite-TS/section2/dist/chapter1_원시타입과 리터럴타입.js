//* number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// num1 = "hello"; // !ERROR
// num2.toUpperCase(); // !ERROR
// num3.toFixed();
//* string
let str1 = "hello";
let str2 = `hello`;
let str3 = `hello ${num1}`;
// str1 = 123; // !ERROR
// str2.toFixed(); // !ERROR
// str3.toUpperCase();
//* boolean
let bool1 = true;
let bool2 = false;
//* null
let null1 = null;
// null1 = 1; //!ERROR
//* undefined
let unde1 = undefined;
//* 💡 생각해보기 - strictNullChecks 옵션 사용 시 null 할당 가능
let numA = null;
//* literal, 값으로 타입을 지정
let numB = 10;
// num B = 12; // !ERROR
let strA = "hello";
export {};
// strA = "Hello"; // !ERROR
// let boolA: true = false; // !ERROR
