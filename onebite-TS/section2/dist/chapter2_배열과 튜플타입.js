// * 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "nor"];
let boolArr = [true, false, true];
// * 배열에 들어가는 요소들의 타입이 다양할 경우
let mulitArr = [1, "hello"];
// * 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// * 튜플
// * 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "2", true];
// tup2 = ["1", 2, "true"]; // !ERROR
tup1.push(1); // ?에러가 발생하지 않기 때문에 주의해서 사용하기
// tup1.push("2"); // !ERROR, 단 지정된 타입과는 다른 타입의 값을 추가하면 에러가 발생한다.
tup1.pop();
tup1.pop();
tup1.pop();
tup1.pop();
// * 튜플을 사용하기 좋은 예
// * ex) 배열의 인덱스 별로 메서드를 적용하여 고정된 타입을 사용해야 할 때
const users = [
    ["홍길동", 1],
    ["박길동", 2],
    ["김길동", 3],
    ["이길동", 4],
    // [5, "최길동"], //!ERROR
];
export {};
