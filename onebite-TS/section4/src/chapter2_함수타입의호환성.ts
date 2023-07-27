/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 *
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 💡 기준 1. 반환값의 타입이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // !ERROR, 반환값의 타입이 다운캐스팅(number -> number literal)이기 때문에 호환되지 않는다.

// 💡 기준 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 2-2. 매개변수의 개수가 다를 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // !ERROR, 매개변수 타입의 호환성을 판단할 때는 업 캐스팅의 경우에 호환되지 않는다.
d = c;

// 💡 매개변수의 업 캐스팅이 호환되지 않는 이유 - 매개변수가 객체 타입인 경우

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let anumalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // !ERROR, animalFunc의 타입인 Animal이 dogFunc의 타입인 Dog의 슈퍼타입이므로 호환되지 않는다.

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // !ERROR, 만약 animalFunc = dogFunc가 허용이 된다면, animal에는 없는 color 프로퍼티를 사용할 수 있게 되기 때문에 업 캐스팅의 경우 호환을 막는다.
};

dogFunc = anumalFunc;

let testFunc2 = (dog: Dog) => {
  console.log(dog.name); // Dog 타입은 Animal 타입의 서브타입이므로 Animal 타입이 갖고 있는 프로퍼티를 무조건 가지고 있다. 따라서 이러한 다운 캐스팅의 경우 호환가능하다.
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // !ERROR, func2의 매개변수 개수가 func1보다 적기 때문에 호환될 수 없다.
