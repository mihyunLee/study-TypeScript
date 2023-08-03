/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "노르",
  sayHi: function () {
    console.log("hi");
  },
};

//person.name = "nor"; // !ERROR
person.sayHi();
person.sayHi(1, 2);
