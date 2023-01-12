class Person {
  name: string = "Mark";
  age!: number; // 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에 !로 위험을 표시한다.
  gender: string;

  constructor(age: number, gender?: string) {
    if (gender === undefined) {
      this.gender = "female";
    } else {
      this.gender = gender;
    }
  }
}

const p1 = new Person(39); // 객체 생성
console.log(p1);
