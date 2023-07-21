// * any 타입
// 특정 변수의 타입을 우리가 확실히 모를 때 사용한다.
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
// * unknwon
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
let str = "hi";
// str = unknownVar; //!ERROR, any 타입과는 다르게 아무 변수에 할당할 수 없다.
// 타입 정제, 타입 좁히기일 경우에만 아무 변수에나 할당할 수 있다.
if (typeof unknownVar === "string") {
    str = unknownVar;
}
export {};
