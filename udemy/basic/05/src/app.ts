// (1) 인터페이스는 초기자를 가질 수 없다.
// 객체의 구조를 정의한다.
interface Greetable {
  // readonly 제어자를 통해 객체가 초기화 된 후
  // 필드 값을 변경할 수 없도록 할 수 있다.
  // public, private는 설정할 수 X.
  readonly name: string;

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
  constructor(public name: string, public age: number) {}

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  sayHi(): void {
    console.log("Hi, " + this.name);
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
let user2: Greetable = new Person("Anna", 30);
// user2.name = "Max"; // ERROR! name is read-only property

user2.greet("hi there - I am "); // hi there - I am Anna
user2.sayHi(); // Hi, Anna
