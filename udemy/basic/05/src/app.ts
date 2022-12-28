class Department {
  /* class field */
  // protected: private와 비슷하지만 이 클래스 뿐만 아니라
  // 확장하는 모든 클래스에서도 사용 가능한 속성으로 만들어준다.
  protected employees: string[] = [];

  static createYear = 2022; // 정적 속성

  // 클래스 필드를 축약해서 생성할 수 있다.
  constructor(private readonly id: string, public name: string) {}

  // 정적 메서드
  static createEmployee(name: string) {
    return { name: name };
  }

  /* method */
  describe(this: Department) {
    // 클래스 내부에서 정적 속성이나 메서드에 접근하려면
    // this 키워드가 아닌 해당하는 클래스 명을 사용해야 한다.
    console.log(
      `Department (${this.id}): ${Department.createYear} ${this.name}`
    );
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// extends: 상속 키워드
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // 상속받은 클래스의 속성값 외에 특정 속성을 추가하기 위해서는
    // super를 호출해야한다.
    super(id, "IT");
  }

  printAdmins() {
    console.log(this.admins);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found");
  }

  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // 기존 메소드 재정의
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.createYear);

const accounting = new AccountingDepartment("d1", ["Report1", "Report2"]);
const accountingIT = new ITDepartment("d2", ["Max"]);

accounting.addEmployee("Max"); // 추가되지 않음
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna"; // Error: 'employees' property is private

accounting.describe();

accounting.addReport("Additional Report");
accounting.mostRecentReport = "Recent Report";
console.log(accounting.mostRecentReport);

accounting.printReports();
accounting.printEmployeeInformation();

accountingIT.describe();
accountingIT.printAdmins();
