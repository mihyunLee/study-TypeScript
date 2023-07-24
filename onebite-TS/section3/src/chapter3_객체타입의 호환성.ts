/**
 * 기본 타입간의 호환성
 * 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// num2 = num1; // !ERROR, 다운 캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal; //!ERROR

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book; // 슈퍼 타입
let programmingBook: ProgrammingBook = {
  // 서브 타입
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 * 객체 타입의 변수를 초기화할 때 객체 리터럴을 사용하면 초과 프로퍼티 검사가 실행된다.
 */

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // !ERROR
};

// 객체 리터럴을 사용하지 않으면 초과 프로퍼티 검사에 해당되지 않아 에러가 발생하지 않음
let book3: Book = programmingBook;

function func(book: Book) {}

// 함수 매개변수에도 객체 리터럴로 전달하면 초과 프로퍼티 검사가 진행된다.
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // !ERROR
});
