// * void 타입
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
// 함수의 반환 값에 대한 타입 지정
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
// TS v5.1 - return 문이 존재하지 않을 때 undefined 타입을 정의하여도 에러가 발생하지 않는다.
function func3() {
    console.log("hello");
}
function func4() {
    console.log("hello");
    return null;
}
let a;
// a = 1; //! ERROR
// a = "hello"; //! ERROR
// a = {}; //! ERROR
a = undefined;
a = null; // strictNullChecks 옵션이 false일 경우에만 할당할 수 있다.
// * never 타입
// never -> 존재하지 않는
// 불가능한 타입
function func5() {
    while (true) { }
}
function func6() {
    throw new Error();
}
let anyVar;
let b;
export {};
// b = 1; //! ERROR
// b = {}; //! ERROR
// b = ""; //! ERROR
// b = undefined; //! ERROR
// b = null; //! ERROR
// b = anyVar; //! ERROR
