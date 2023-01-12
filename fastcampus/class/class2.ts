class Person2 {
  name: string = "Mark";
  private age!: number;

  constructor(age: number) {
    this.age = age;
  }
}

const p2 = new Person2(39);
console.log(p2);
// p2.age = 20; // age는 private 접근 제어자이기 때문에 클래스 외부에서 접근할 수 없다.
