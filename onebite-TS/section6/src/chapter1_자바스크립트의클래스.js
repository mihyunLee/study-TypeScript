/**
 * 클래스
 */

let studentA = {
  name: "노르",
  grade: "A+",
  age: 25,

  study() {
    console.log("열심히 공부 함");
  },

  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("김길동", "A0", 27);
console.log(studentB); // Student { name: '김길동', grade: 'A0', age: 27 }
studentB.study(); // 열심히 공부 함
studentB.introduce(); // 안녕하세요!

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 개발함`);
  }
}

const studentDeveloper = new StudentDeveloper("김길동", "B+", 27, "TypeScript");
console.log(studentDeveloper);
/*
StudentDeveloper {
  name: '김길동',
  grade: 'B+',
  age: 27,
  favoriteSkill: 'TypeScript'
}
*/
studentDeveloper.programming(); // TypeScript로 개발함
