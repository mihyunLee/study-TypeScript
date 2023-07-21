//* number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = "hello"; // !ERROR
// num2.toUpperCase(); // !ERROR
// num3.toFixed();

//* string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// str1 = 123; // !ERROR
// str2.toFixed(); // !ERROR
// str3.toUpperCase();

//* boolean
let bool1: boolean = true;
let bool2: boolean = false;

//* null
let null1: null = null;
// null1 = 1; //!ERROR

//* undefined
let unde1: undefined = undefined;

//* 💡 생각해보기 - strictNullChecks 옵션 사용 시 null 할당 가능
let numA: number = null;

//* literal, 값으로 타입을 지정
let numB: 10 = 10;
// num B = 12; // !ERROR

let strA: "hello" = "hello";
// strA = "Hello"; // !ERROR

// let boolA: true = false; // !ERROR
