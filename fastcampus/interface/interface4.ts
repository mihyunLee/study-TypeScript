interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

// 클래스에 인터페이스 상속받기
// 여러개의 인터페이스를 상속받을 수도 있다.
// 인터페이스에 작성된 프로퍼티를 클래스에 필수로 생성해주어야한다.
// 그 외에 새로운 메소드나 클래스 필드를 생성할 수도 있다.
class Person implements IPerson1 {
  name: string;
  age?: number | undefined; // optional이라 생략해도 된다.

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }

  hello2(): void {
    console.log(`안녕! ${this.name}이야.`);
  }
}

const person = new Person("Mark");
person.hello();
person.hello2();
