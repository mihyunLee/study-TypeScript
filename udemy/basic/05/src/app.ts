class Department {
  // Class Field
  name: string;
  private employees: string[] = []; // private: 객체 밖에서 필드에 접근할 수 없다.

  constructor(n: string) {
    this.name = n;
  }

  // method
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna"; // Error: 'employees' property is private

accounting.describe();
accounting.printEmployeeInformation();
