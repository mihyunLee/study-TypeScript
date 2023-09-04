/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employee = new Employee("노르", 25, "developer");

// 필드의 접근 제어자가 public이 default이기 때문에 값을 수정할 수 있다.
// employee.name = "홍길동"; // !ERROR, name 필드는 private
// employee.age = 30; // !ERROR, age 필드는 protected
employee.position = "designer";
