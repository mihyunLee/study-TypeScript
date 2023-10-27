/**
 * 조건부 타입
 * - 조건에 따라 타입을 결정한다.
 */

type A = number extends string ? string : number;
// A: number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;
// B: number

/**
 * 제네릭과 조건부 타입
 */

// T가 number라면 string 타입을, 아니라면 number 타입이 T에 할당된다.
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// varA: string

let varB: StringNumberSwitch<string>;
// varB: number

/**
 * 제네릭과 조건부 타입 (+ 오버로드 시그니쳐)
 */

// 오버로드 시그니쳐 생성
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
    // undefined가 아닌 다른 타입의 값을 반환할 경우
    // 오버로드 시그니쳐에서 타입을 감지해 에러를 발생시켜준다.
  }
}

let result = removeSpaces("hi im nor");
result.toUpperCase();

let result2 = removeSpaces(undefined); // 에러가 발생하지 않는다.
