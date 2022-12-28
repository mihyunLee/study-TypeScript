class Department {
  // Class Field
  private employees: string[] = []; // private: 객체 밖에서 필드에 접근할 수 없다.

  // 클래스 필드를 축약해서 생성할 수 있다.
  constructor(private readonly id: string, public name: string) {}

  // method
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna"; // Error: 'employees' property is private

accounting.describe();
accounting.printEmployeeInformation();
