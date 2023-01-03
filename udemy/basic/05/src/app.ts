// 함수 타입
// type AddFn = (a: number, b: number) => number;

// 인터페이스는 함수 타입도 정의할 수 있다.
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // '?'를 사용하여 옵셔널 속성을 만들 수 있다.
}

// (1) 인터페이스는 초기자를 가질 수 없다.
// 객체의 구조를 정의한다.
// (4) 인터페이스 확장: extend
// 인터페이스를 분리하면서 공통으로 사용되는 부분과,
// 그렇지 않은 부분을 따로 관리할 수 있다.
interface Greetable extends Named {
  greet(phrase: string): void;
}

// (2) 사용자 정의 타입(type)과는 다르게 선언을 병합할 수 있다.
interface Greetable {
  sayHi(): void;
}

// (3) 인터페이스 구현
// 상속과는 다르게 여러개의 인터페이스를 하나의 클래스에 구현할 수 있다.
// ex) class Person implements Greetable, AnotherInterface {...}
// 클래스는 인터페이스에 정의된 내용을 무조건 포함해야 한다.
class Person implements Greetable {
  // '?'를 사용해서 optional 매개변수로 만들거나, 디폴트 값을 주게 되면
  // 인스턴스 생성시에 인자에 값을 전달하지 않아도 되는 공통점이 있다.
  constructor(public name?: string, public age = 30) {}

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Who are you?");
    }
  }

  sayHi(): void {
    if (this.name) {
      console.log("Hi, " + this.name);
    }
  }
}

// 인터페이스로 객체 생성
let user1: Greetable;

user1 = {
  name: "Max",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
  sayHi() {
    console.log("Hi, " + this.name);
  },
};

user1.greet("hi there - I am "); // hi there - I am Max
user1.sayHi(); // Hi, Max

// user1.name = "Something"; // ERROR! name is read-only property

// 클래스로 인스턴스 생성
// 인터페이스가 구현된 클래스에 read-only가 적용되려면
// 클래스에 인터페이스 타입을 지정해주어야 한다.
let user2: Greetable = new Person();
// user2.name = "Max"; // ERROR! name is read-only property

user2.greet("hi there - I am "); // Who are you?
user2.sayHi(); // 출력되지 X.
